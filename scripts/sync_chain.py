#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
NNB 用户数据库自动同步脚本 (GitHub Actions 用)
- 扫描新系统合约事件, 发现新用户
- 更新所有用户的链上最新数据
- 输出到 data/users.json
"""
import json, os, time, urllib.request
from Crypto.Hash import keccak

URLS = ["https://bsc-dataseed1.binance.org/", "https://bsc-dataseed.binance.org/", "https://rpc.ankr.com/bsc"]
OLD = "0xB94cD1E6f6D73022FFb8C813864411405d706125"
NEW = "0x11d845a51C498d70daECc9Afe932085Eb55b59Bf"
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB = os.path.join(BASE, "data", "users.json")
PROGRESS = os.path.join(BASE, "data", "scan_progress.json")

def s4(n):
    k = keccak.new(digest_bits=256); k.update(n.encode()); return "0x" + k.hexdigest()[:8]

def rpc(m, p):
    d = json.dumps({"jsonrpc":"2.0","method":m,"params":p,"id":1}).encode()
    for u in URLS:
        for _ in range(3):
            try:
                return json.load(urllib.request.urlopen(urllib.request.Request(u, data=d, headers={"Content-Type":"application/json"}), timeout=30))
            except Exception:
                time.sleep(1); continue
    return {}

def read_user(addr):
    sel = s4("users(address)")
    pad = addr[2:].lower().rjust(64, '0')
    for chain in (OLD, NEW):
        r = rpc("eth_call", [{"to":chain, "data":sel+pad}, "latest"]).get("result")
        if r and int(r, 16) != 0:
            f = [r[2:][i*64:(i+1)*64] for i in range(16)]
            return {
                "addr": addr.lower(), "activated": int(f[0],16), "isNode": int(f[1],16),
                "totalInvestedUSD": str(int(f[2],16)), "totalMined": str(int(f[3],16)),
                "lastBuyTime": str(int(f[4],16)), "myBalance": str(int(f[5],16)),
                "myBalance_div3": str(int(f[5],16)//3), "directPushTotalUSD": str(int(f[6],16)),
                "teamLevel": str(int(f[7],16)), "teamCount": str(int(f[8],16)),
                "referrer": ("0x"+f[9][24:].lower()) if int(f[9],16) else "",
                "totalReinvestCount": str(int(f[10],16)), "totalWithdrawCount": str(int(f[11],16)),
                "lockedUntil": str(int(f[12],16)), "boostMultiplier": str(int(f[13],16)),
                "boostExpireTime": str(int(f[14],16)), "updatedAt": int(time.time())
            }
    return None

def scan_new_users(from_block, to_block):
    """扫新用户事件 (Subscribed / Bound / NodeActivated / BoughtMiner)"""
    topics = {
        "0x"+keccak.new(digest_bits=256).hexdigest()[:0]: None,  # placeholder
    }
    # 计算事件topic
    def ev_topic(sig):
        k = keccak.new(digest_bits=256); k.update(sig.encode()); return "0x"+k.hexdigest()
    evs = {
        ev_topic("Subscribed(address,uint256,uint256,uint256,uint256)"): "Subscribed",
        ev_topic("Bound(address,address)"): "Bound",
        ev_topic("NodeActivated(address,uint256)"): "NodeActivated",
        ev_topic("BoughtMiner(address,uint256,uint256)"): "BoughtMiner",
    }
    found = set()
    for evt, tname in evs.items():
        r = rpc("eth_getLogs", [{"fromBlock":hex(from_block),"toBlock":hex(to_block),"address":NEW,"topics":[evt]}])
        for lg in (r.get("result") or []):
            try:
                addr = "0x"+lg["topics"][1][-40:]
                found.add(addr.lower())
            except Exception:
                pass
    return found

def main():
    os.makedirs(os.path.join(BASE, "data"), exist_ok=True)
    db = json.load(open(DB)) if os.path.exists(DB) else []
    index = {u["addr"].lower(): u for u in db}

    latest = int(rpc("eth_blockNumber", [])["result"], 16)
    prog = json.load(open(PROGRESS)) if os.path.exists(PROGRESS) else {"lastScanBlock": latest - 5000}

    # 1. 扫新用户
    from_b = prog.get("lastScanBlock", latest - 5000)
    print(f"扫描区块 {from_b} -> {latest}")
    new_addrs = scan_new_users(from_b, latest)
    print(f"发现新地址事件: {len(new_addrs)}")

    added = 0
    for a in new_addrs:
        if a in index: continue
        u = read_user(a)
        if u:
            db.append(u); index[a] = u; added += 1
    print(f"新入库用户: {added}")

    # 2. 更新已有用户数据
    updated = 0
    for u in db:
        nu = read_user(u["addr"])
        if nu and nu.get("myBalance") != u.get("myBalance"):
            u.update(nu); updated += 1
    print(f"更新用户: {updated}")

    json.dump(db, open(DB, "w"), indent=1)
    json.dump({"lastScanBlock": latest, "lastRun": int(time.time())}, open(PROGRESS, "w"))
    print(f"数据库总数: {len(db)}")

if __name__ == "__main__":
    main()
