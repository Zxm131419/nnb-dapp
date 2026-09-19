#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
NNB 用户数据库自动同步脚本 v2.0 (GitHub Actions 用)

★ v2.0 改进：
  1. 三層合約全查（舊系統 + V33 + 新系統），取最新有效值
  2. 支援完整地址清單（addresses.json，含補遷移用戶）
  3. 加入 source / updatedAt 欄位（可追溯資料來源）
  4. 保留既有資料，只更新有變化的部分

輸出：
  data/users.json          — 完整用戶資料庫
  data/scan_progress.json  — 掃描進度
  data/stats.json          — 統計摘要
"""
import json, os, time, urllib.request
from Crypto.Hash import keccak

URLS = [
    "https://bsc-dataseed1.binance.org/",
    "https://bsc-dataseed.binance.org/",
    "https://bsc-dataseed2.binance.org/",
    "https://rpc.ankr.com/bsc",
]

# ============================================================
# ★ 三層合約地址（v2.0 完整版）
# ============================================================
CHAINS = {
    "old": "0xB94cD1E6f6D73022FFb8C813864411405d706125",   # 舊系統
    "v33": "0x11d845a51C498d70daECc9Afe932085Eb55b59Bf",   # V33
    "new": "0x0745f350358d1478C28626235b062Eafc6b49648",   # 新系統（Mining）
}
# 新系統為最終來源（優先使用）
PRIORITY = ["new", "v33", "old"]

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB = os.path.join(BASE, "data", "users.json")
PROGRESS = os.path.join(BASE, "data", "scan_progress.json")
STATS = os.path.join(BASE, "data", "stats.json")
ADDRESSES = os.path.join(BASE, "data", "addresses.json")


def s4(n):
    k = keccak.new(digest_bits=256)
    k.update(n.encode())
    return "0x" + k.hexdigest()[:8]


def rpc(m, p):
    d = json.dumps({"jsonrpc": "2.0", "method": m, "params": p, "id": 1}).encode()
    for u in URLS:
        for _ in range(2):
            try:
                return json.load(urllib.request.urlopen(
                    urllib.request.Request(u, data=d,
                        headers={"Content-Type": "application/json", "User-Agent": "nnb-sync/2.0"}),
                    timeout=30))
            except Exception:
                time.sleep(1)
                continue
    return {}


def parse_user(hexstr):
    """解析 users(address) 回傳值（15 個欄位）"""
    h = hexstr[2:] if hexstr.startswith("0x") else hexstr
    if len(h) < 15 * 64:
        return None
    def f(i):
        return int(h[i * 64:(i + 1) * 64], 16)
    return {
        "activated": f(0), "isNode": f(1),
        "totalInvestedUSD": str(f(2)), "totalMined": str(f(3)),
        "lastBuyTime": str(f(4)), "myBalance": str(f(5)),
        "myBalance_div3": str(f(5) // 3),
        "directPushTotalUSD": str(f(6)),
        "teamLevel": str(f(7)), "teamCount": str(f(8)),
        "referrer": ("0x" + h[9 * 64 + 24:10 * 64].lower()) if f(9) else "",
        "totalReinvestCount": str(f(10)), "totalWithdrawCount": str(f(11)),
        "lockedUntil": str(f(12)),
        "boostMultiplier": str(f(13)), "boostExpireTime": str(f(14)),
    }


def read_user_multi(addr):
    """★ v2.0：查三層合約，回傳 {source, ...data}"""
    sel = s4("users(address)")
    pad = addr[2:].lower().rjust(64, "0")
    best = None
    for cname in PRIORITY:  # new → v33 → old
        contract = CHAINS[cname]
        r = rpc("eth_call", [{"to": contract, "data": sel + pad}, "latest"]).get("result")
        if r and r != "0x":
            try:
                if int(r, 16) == 0:
                    continue
            except Exception:
                continue
            data = parse_user(r)
            if data and data["activated"]:
                return {"source": cname, **data}
            if data and best is None:
                best = {"source": cname, **data}
    return best


def ev_topic(sig):
    k = keccak.new(digest_bits=256)
    k.update(sig.encode())
    return "0x" + k.hexdigest()


def scan_new_users(from_block, to_block):
    """掃描新用戶事件（三層合約）"""
    evs = [
        ev_topic("BoughtMiner(address,uint256,uint256)"),
        ev_topic("Bound(address,address)"),
        ev_topic("NodeActivated(address,uint256)"),
        ev_topic("Subscribed(address,uint256,uint256,uint256,uint256)"),
        ev_topic("Migrated(address,uint256)"),
        ev_topic("Reinvested(address,uint256)"),
        ev_topic("Claimed(address,uint256)"),
    ]
    found = set()
    for cname in ["new", "v33"]:
        contract = CHAINS[cname]
        for evt in evs:
            r = rpc("eth_getLogs", [{"fromBlock": hex(from_block), "toBlock": hex(to_block),
                                     "address": contract, "topics": [evt]}])
            for lg in (r.get("result") or []):
                try:
                    topics = lg.get("topics") or []
                    if len(topics) >= 2:
                        found.add(("0x" + topics[1][-40:]).lower())
                except Exception:
                    pass
    return found


def main():
    os.makedirs(os.path.join(BASE, "data"), exist_ok=True)

    # 載入現有資料庫
    db = json.load(open(DB)) if os.path.exists(DB) else []
    index = {u["addr"].lower(): u for u in db}

    # ★ 載入完整地址清單（v2.0 新增）
    known_addrs = set()
    if os.path.exists(ADDRESSES):
        try:
            lst = json.load(open(ADDRESSES))
            for a in lst:
                known_addrs.add(a.lower())
            print(f"讀取地址清單: {len(known_addrs)} 筆")
        except Exception as e:
            print(f"地址清單讀取失敗: {e}")

    # 掃描新用戶
    latest = int(rpc("eth_blockNumber", [])["result"], 16)
    prog = json.load(open(PROGRESS)) if os.path.exists(PROGRESS) else {"lastScanBlock": latest - 5000}
    from_b = prog.get("lastScanBlock", latest - 5000)
    print(f"掃描區塊 {from_b} -> {latest}")

    new_addrs = scan_new_users(from_b, latest)
    print(f"事件發現新地址: {len(new_addrs)}")

    # 合併：事件新地址 + 已知清單
    all_targets = set(new_addrs) | known_addrs
    print(f"總目標地址: {len(all_targets)}")

    now_ts = int(time.time())
    added = 0
    updated = 0
    skipped = 0

    for a in sorted(all_targets):
        u = read_user_multi(a)
        if not u:
            skipped += 1
            continue
        u["addr"] = a.lower()
        u["updatedAt"] = now_ts
        if a in index:
            old = index[a]
            # 只在有變化時更新
            if (old.get("myBalance") != u.get("myBalance")
                    or old.get("activated") != u.get("activated")
                    or old.get("source") != u.get("source")):
                old.update(u)
                updated += 1
            else:
                old["updatedAt"] = now_ts  # 時間戳仍更新
        else:
            db.append(u)
            index[a] = u
            added += 1

    # 排序（按地址）
    db.sort(key=lambda x: x["addr"])

    # 統計
    act = [x for x in db if x.get("activated")]
    # 產能優先採用 new 來源
    new_src = [x for x in db if x.get("source") == "new"]
    v33_src = [x for x in db if x.get("source") == "v33"]
    old_src = [x for x in db if x.get("source") == "old"]
    total_bal = sum(int(x.get("myBalance", 0)) for x in new_src) / 1e18
    stats = {
        "total": len(db),
        "activated": len(act),
        "source_new": len(new_src),
        "source_v33": len(v33_src),
        "source_old": len(old_src),
        "totalBalanceNNB_new": f"{total_bal:,.2f}",
        "nodeCount": len([x for x in db if x.get("isNode")]),
        "lastRun": now_ts,
        "lastScanBlock": latest,
    }

    json.dump(db, open(DB, "w"), indent=1, ensure_ascii=False)
    json.dump({"lastScanBlock": latest, "lastRun": now_ts}, open(PROGRESS, "w"))
    json.dump(stats, open(STATS, "w"), indent=2, ensure_ascii=False)

    print(f"新增: {added} / 更新: {updated} / 跳過: {skipped}")
    print(f"資料庫總數: {len(db)}")
    print(f"統計: {json.dumps(stats, ensure_ascii=False)}")


if __name__ == "__main__":
    main()
