// ===== NNB 语言系统 v2 (7语言, 下拉菜单) =====
// 语言: 简体中文🇨🇳 / 繁體中文🇭🇰 / English🇺🇸 / 日本語🇯🇵 / 한국어🇰🇷 / Tiếng Việt🇻🇳 / Bahasa Melayu🇸🇬
// 一次性完整切换所有界面文案
var NNB_DICT = {};

// ---------- 简体中文(基准,完整) ----------
NNB_DICT["zh-CN"]={
 back:"返回首页","wallet.connect":"连接钱包","price.market":"价格市场","price.origin":"原始价格:","price.total":"总涨幅:",
 "subscribe.title":"一键认购","subscribe.desc":"原始 2100 万枚 · 认购即销毁 · 3 倍产能","subscribe.price":"认购价格","subscribe.triple":"3倍产出",
 "mine.estReceive":"预计锁仓产能(3倍)","subscribe.btn":"立即认购","nav.tradeCenter":"交易中心","nav.buyMining":"购买矿机",
 "nav.inviteShare":"邀请分享","nav.activateNode":"激活节点","banner.brand":"金牛聚财运 · 牛牛金币","banner.fengshui":"2024-2043 离火大运 · NNB生态",
 "banner.reward":"NNB 挂单奖励","banner.rewardDesc":"参与挂单赢取丰厚奖励","banner.live":"上线","banner.title":"NNB 多空套利",
 "banner.desc":"智能永续合约,锁定市场套利收益","banner.audit":"智能合约审计","banner.auditDesc":"安全高效的自动化链上执行协议","banner.audited":"已审计",
 "home.advantage":"核心优势","home.lever":"动态杠杆","home.leverDesc":"根据市场情况动态调整挖矿杠杆,最大化收益潜力",
 "home.transparent":"透明机制","home.transparentDesc":"所有合约和交易均可在链上公开验证,确保透明公平",
 "home.referral":"推荐系统","home.referralDesc":"邀请好友加入,获得额外推荐奖励,共同分享挖矿成果",
 "trade.title":"NNB/USDT 交易池","trade.buy":"买入 NNB","trade.sell":"卖出 NNB","trade.buyAmount":"支付 USDT","trade.receive":"收到 NNB (预计)",
 "trade.price":"价格","trade.buyBtn":"确认买入(挂单)","trade.receiveUSDT":"收到 USDT","trade.sellBtn":"确认卖出",
 "trade.pool":"底池 USDT 总量","trade.poolClosed":"未开放","common.refresh":"刷新","common.connectFirst":"请先连接钱包",
 "trade.noBuyOrders":"暂无购买挂单","mine.price":"矿机价格","common.all":"全部","mine.purchaseHint":"持NNB即可购买矿机,不限额度.",
 "mine.currentValue":"当前价值","mine.estBase":"预计基础 NNB","mine.estTotal":"预计挖矿总量","common.approve":"授权",
 "bind.title":"绑定上级地址","bind.desc":"购买矿机前需要绑定上级地址,绑定后无法更改","bind.btn":"确认绑定",
 "mine.title":"我的矿机","mine.status":"矿机状态","mine.capacity":"剩余产能","mine.rate":"当前日化率","mine.claimable":"今日可领",
 "claim.timer.loading":"加载中...","mine.claim":"领取今日收益","mine.gasHint":"领取需要极少量 BNB 作为 gas 费",
 "node.title":"成为推广节点,解锁团队收益!","node.cost":"激活节点需支付 500 USDT","node.income":"额外获得推广矿机挖矿收益的 9%",
 "invite.title":"我的推广","invite.link":"我的推广链接(一键绑定)","common.connectToShow":"连接钱包后显示","invite.copy":"复制",
 "invite.id":"我的推广ID(钱包地址)","common.notConnected":"未连接","invite.contract":"NNB 合约地址",
 "invite.desc":"分享此推广ID给好友,当好友使用您的地址绑定并购买矿机后,您将获得收益.","invite.count":"累计邀请",
 "invite.list":"邀约用户列表","invite.empty":"暂无邀约用户开始分享推广链接吧!","node.btn":"授权激活节点","node.identity":"身份:矿工",
 "node.website":"官网链接","invite.promoId":"推广ID","mine.reinvest":"复投","mine.reinvestDesc":"产能产完后复投重新获得3倍产能,最低2000 NNB(约20U).",
 "mine.reinvestBtn":"复投 (最低2000 NNB)","node.status":"节点状态","profile.title":"我的收益","node.revenue":"推广节点收益(9%)",
 "nav.home":"首页","nav.trade":"交易","nav.mining":"矿机","nav.invite":"邀请","nav.profile":"我的",
 "trade.noOrders":"暂无挂单","profile.direct":"直推人数","profile.nodeIncome":"节点收益(9%)",
 "lang.title":"选择语言"
,"back":"返回首页","brand.name":"牛牛金币","brand.sub":"金 牛 聚 财 运","trade.amountUsdt":"输入 USDT 金额(最低 200)","trade.amountNnb":"输入 NNB 数量","mine.amountBuy":"输入购买数量","bind.inputAddr":"请输入上级钱包地址","trans.toAddr":"接收方钱包地址 (0x...)","trans.nnbAmt":"转出 NNB 数量","invite.startSharing":"开始分享推广链接吧!","node.dividend":"节点分红(平均)","node.claimableDiv":"可领分红:","node.divHint":"累积可领 · 不分日,可一次性领取","node.divDesc":"每次用户领取时,10%进分红池平均分给节点;你随时可以一次性领取累积分红,不用每天领。","common.claim":"领取","invite.unlockTitle":"业绩解锁代数","invite.unlockDesc":"用累计直推业绩(U)解锁推广代数","invite.tiers":"解锁阶梯","invite.progress":"当前进度","invite.nextTier":"下一个阶梯","invite.diamond":"钻石级","trade.myOrders":"我的挂单列表","trade.buyOrders":"购买挂单列表","trans.estPerf":"预计业绩","trans.approveHint":"需您在钱包内先授权 NNB 给 DApp 合约（approve），一次授权可多次互转。","perf.directAmt":"直推业绩","perf.gen":"已解锁代数","perf.unit":"代","perf.maxReached":"已解锁满级","perf.progress":"当前","perf.toReach":"距","perf.unlock":"U解锁","perf.remain":"代还差","trans.title":"NNB 互转（DApp 内）","trans.btn":"互转并计业绩","trans.desc":"在 DApp 内互转 NNB：填写接收方钱包地址与转出数量，链上真实划转，自动按当前价折算 USDT 业绩（解锁代数/档位）。业绩额度 = 实际转出量，不可造假。","mine.active":"已激活","mine.inactive":"未激活","mine.accel19":"19代加速","mine.clickClaim":"可领取!立即点击领取"};
// ---------- 繁體中文 ----------
NNB_DICT["zh-TW"]={
 back:"返回首頁","wallet.connect":"連接錢包","price.market":"價格市場","price.origin":"原始價格:","price.total":"總漲幅:",
 "subscribe.title":"一鍵認購","subscribe.desc":"原始 2100 萬枚 · 認購即銷毀 · 3 倍產能","subscribe.price":"認購價格","subscribe.triple":"3倍產出",
 "mine.estReceive":"預計鎖倉產能(3倍)","subscribe.btn":"立即認購","nav.tradeCenter":"交易中心","nav.buyMining":"購買礦機",
 "nav.inviteShare":"邀請分享","nav.activateNode":"啟動節點","banner.brand":"金牛聚財運 · 牛牛金幣","banner.fengshui":"2024-2043 離火大運 · NNB生態",
 "banner.reward":"NNB 掛單獎勵","banner.rewardDesc":"參與掛單贏取豐厚獎勵","banner.live":"上線","banner.title":"NNB 多空套利",
 "banner.desc":"智能永續合約,鎖定市場套利收益","banner.audit":"智能合約審計","banner.auditDesc":"安全高效的自動化鏈上執行協議","banner.audited":"已審計",
 "home.advantage":"核心優勢","home.lever":"動態槓桿","home.leverDesc":"根據市場情況動態調整挖礦槓桿,最大化收益潛力",
 "home.transparent":"透明機制","home.transparentDesc":"所有合約和交易均可在鏈上公開驗證,確保透明公平",
 "home.referral":"推薦系統","home.referralDesc":"邀請好友加入,獲得額外推薦獎勵,共同分享挖礦成果",
 "trade.title":"NNB/USDT 交易池","trade.buy":"買入 NNB","trade.sell":"賣出 NNB","trade.buyAmount":"支付 USDT","trade.receive":"收到 NNB (預計)",
 "trade.price":"價格","trade.buyBtn":"確認買入(掛單)","trade.receiveUSDT":"收到 USDT","trade.sellBtn":"確認賣出",
 "trade.pool":"底池 USDT 總量","trade.poolClosed":"未開放","common.refresh":"刷新","common.connectFirst":"請先連接錢包",
 "trade.noBuyOrders":"暫無購買掛單","mine.price":"礦機價格","common.all":"全部","mine.purchaseHint":"持NNB即可購買礦機,不限額度.",
 "mine.currentValue":"當前價值","mine.estBase":"預計基礎 NNB","mine.estTotal":"預計挖礦總量","common.approve":"授權",
 "bind.title":"綁定上級地址","bind.desc":"購買礦機前需要綁定上級地址,綁定後無法更改","bind.btn":"確認綁定",
 "mine.title":"我的礦機","mine.status":"礦機狀態","mine.capacity":"剩餘產能","mine.rate":"當前日化率","mine.claimable":"今日可領",
 "claim.timer.loading":"加載中...","mine.claim":"領取今日收益","mine.gasHint":"領取需要極少量 BNB 作為 gas 費",
 "node.title":"成為推廣節點,解鎖團隊收益!","node.cost":"啟動節點需支付 500 USDT","node.income":"額外獲得推廣礦機挖礦收益的 9%",
 "invite.title":"我的推廣","invite.link":"我的推廣連結(一鍵綁定)","common.connectToShow":"連接錢包後顯示","invite.copy":"複製",
 "invite.id":"我的推廣ID(錢包地址)","common.notConnected":"未連接","invite.contract":"NNB 合約地址",
 "invite.desc":"分享此推廣ID給好友,當好友使用您的地址綁定並購買礦機後,您將獲得收益.","invite.count":"累計邀請",
 "invite.list":"邀約用戶列表","invite.empty":"暫無邀約用戶開始分享推廣連結吧!","node.btn":"授權啟動節點","node.identity":"身份:礦工",
 "node.website":"官網連結","invite.promoId":"推廣ID","mine.reinvest":"復投","mine.reinvestDesc":"產能產完後復投重新獲得3倍產能,最低2000 NNB(約20U).",
 "mine.reinvestBtn":"復投 (最低2000 NNB)","node.status":"節點狀態","profile.title":"我的收益","node.revenue":"推廣節點收益(9%)",
 "nav.home":"首頁","nav.trade":"交易","nav.mining":"礦機","nav.invite":"邀請","nav.profile":"我的",
 "trade.noOrders":"暫無掛單","profile.direct":"直推人數","profile.nodeIncome":"節點收益(9%)",
 "lang.title":"選擇語言"
,"back":"返回首頁","brand.name":"牛牛金幣","brand.sub":"金 牛 聚 財 運","trade.amountUsdt":"輸入 USDT 金額(最低 200)","trade.amountNnb":"輸入 NNB 數量","mine.amountBuy":"輸入購買數量","bind.inputAddr":"請輸入上級錢包地址","trans.toAddr":"接收方錢包地址 (0x...)","trans.nnbAmt":"轉出 NNB 數量","invite.startSharing":"開始分享推廣連結吧!","node.dividend":"節點分紅(平均)","node.claimableDiv":"可領分紅:","node.divHint":"累積可領 · 不分日,可一次性領取","node.divDesc":"每次用戶領取時,10%進分紅池平均分給節點;你隨時可以一次性領取累計分紅,不用每天領。","common.claim":"領取","invite.unlockTitle":"業績解鎖代數","invite.unlockDesc":"用累計直推業績(U)解鎖推廣代數","invite.tiers":"解鎖階梯","invite.progress":"當前進度","invite.nextTier":"下一個階梯","invite.diamond":"鑽石級","trade.myOrders":"我的掛單列表","trade.buyOrders":"購買掛單列表","trans.estPerf":"預計業績","trans.approveHint":"需您在錢包內先授權 NNB 給 DApp 合約（approve），一次授權可多次互轉。","perf.directAmt":"直推業績","perf.gen":"已解鎖代數","perf.unit":"代","perf.maxReached":"已解鎖滿級","perf.progress":"當前","perf.toReach":"距","perf.unlock":"U解鎖","perf.remain":"代還差","trans.title":"NNB 互轉（DApp 內）","trans.btn":"互轉並計業績","trans.desc":"在 DApp 內互轉 NNB：填寫接收方錢包地址與轉出數量，鏈上真實劃轉，自動按當前價折算 USDT 業績（解鎖代數/檔位）。業績額度 = 實際轉出量，不可造假。","mine.active":"已啟動","mine.inactive":"未啟動","mine.accel19":"19代加速","mine.clickClaim":"可領取!立即點擊領取"};
// ---------- English ----------
NNB_DICT["en"]={
 back:"Back","wallet.connect":"Connect Wallet","price.market":"Market Price","price.origin":"Original:","price.total":"Total Change:",
 "subscribe.title":"Subscribe","subscribe.desc":"Orig 21M · Burn on sub · 3x capacity","subscribe.price":"Sub Price","subscribe.triple":"3x Output",
 "mine.estReceive":"Est Locked Cap (3x)","subscribe.btn":"Subscribe Now","nav.tradeCenter":"Trade Center","nav.buyMining":"Buy Miner",
 "nav.inviteShare":"Invite Share","nav.activateNode":"Activate Node","banner.brand":"Bull Gold · NNB Coin","banner.fengshui":"Fire Era 2024-2043 · NNB",
 "banner.reward":"NNB Order Rewards","banner.rewardDesc":"Join orders for rewards","banner.live":"Live","banner.title":"NNB Long/Short",
 "banner.desc":"Smart perpetual, lock arbitrage profit","banner.audit":"Smart Contract Audit","banner.auditDesc":"Safe automated on-chain protocol","banner.audited":"Audited",
 "home.advantage":"Core Advantage","home.lever":"Dynamic Leverage","home.leverDesc":"Dynamic mining leverage to maximize profit",
 "home.transparent":"Transparent","home.transparentDesc":"All contracts verifiable on-chain, fair","home.referral":"Referral System","home.referralDesc":"Invite friends, earn extra rewards",
 "trade.title":"NNB/USDT Pool","trade.buy":"Buy NNB","trade.sell":"Sell NNB","trade.buyAmount":"Pay USDT","trade.receive":"Receive NNB (est)",
 "trade.price":"Price","trade.buyBtn":"Confirm Buy","trade.receiveUSDT":"Receive USDT","trade.sellBtn":"Confirm Sell",
 "trade.pool":"Pool USDT Total","trade.poolClosed":"Closed","common.refresh":"Refresh","common.connectFirst":"Connect wallet first",
 "trade.noBuyOrders":"No buy orders","mine.price":"Miner Price","common.all":"All","mine.purchaseHint":"Hold NNB to buy miner, no limit",
 "mine.currentValue":"Current Value","mine.estBase":"Est Base NNB","mine.estTotal":"Est Total Output","common.approve":"Approve",
 "bind.title":"Bind Referrer","bind.desc":"Bind referrer before buying miner (fixed)","bind.btn":"Confirm Bind",
 "mine.title":"My Miner","mine.status":"Miner Status","mine.capacity":"Remaining Cap","mine.rate":"Daily Rate","mine.claimable":"Claimable Today",
 "claim.timer.loading":"Loading...","mine.claim":"Claim Today's Yield","mine.gasHint":"Needs tiny BNB for gas",
 "node.title":"Become a Node & Unlock Team Rewards!","node.cost":"Activate node: 500 USDT","node.income":"Extra 9% of miner income",
 "invite.title":"My Referral","invite.link":"My Referral Link (1-click)","common.connectToShow":"Show after connect","invite.copy":"Copy",
 "invite.id":"My Referral ID","common.notConnected":"Not Connected","invite.contract":"NNB Contract Address",
 "invite.desc":"Share your Referral ID; friends earn when buying miner.","invite.count":"Total Invites",
 "invite.list":"Invitee List","invite.empty":"No invitees yet, share your link!","node.btn":"Authorize & Activate Node","node.identity":"Role: Miner",
 "node.website":"Official Website","invite.promoId":"Referral ID","mine.reinvest":"Reinvest","mine.reinvestDesc":"Reinvest for 3x capacity, min 2000 NNB (~20U).",
 "mine.reinvestBtn":"Reinvest (min 2000 NNB)","node.status":"Node Status","profile.title":"My Earnings","node.revenue":"Node Income (9%)",
 "nav.home":"Home","nav.trade":"Trade","nav.mining":"Miner","nav.invite":"Invite","nav.profile":"Me",
 "trade.noOrders":"No orders","profile.direct":"Direct Referrals","profile.nodeIncome":"Node Income (9%)",
 "lang.title":"Select Language"
,"back":"Back","brand.name":"Bull Gold","brand.sub":"Gold Bull Fortune","trade.amountUsdt":"Enter USDT amount (min 200)","trade.amountNnb":"Enter NNB amount","mine.amountBuy":"Enter buy amount","bind.inputAddr":"Enter referrer wallet","trans.toAddr":"Receiver wallet (0x...)","trans.nnbAmt":"Enter NNB to send","invite.startSharing":"Start sharing your link!","node.dividend":"Node Dividend (avg)","node.claimableDiv":"Claimable:","node.divHint":"Accumulated · claim anytime","node.divDesc":"10% of each claim goes to node dividend pool; claim accumulated all at once anytime.","common.claim":"Claim","invite.unlockTitle":"Performance Unlock Tiers","invite.unlockDesc":"Unlock referral tiers by cumulative direct performance (U)","invite.tiers":"Unlock Ladder","invite.progress":"Current Progress","invite.nextTier":"Next Tier","invite.diamond":"Diamond","trade.myOrders":"My Orders","trade.buyOrders":"Buy Orders","trans.estPerf":"Est. Performance","trans.approveHint":"Please approve NNB to the contract first (once, reusable).","perf.directAmt":"Direct Perf","perf.gen":"Unlocked Tiers","perf.unit":"tier","perf.maxReached":"Fully unlocked","perf.progress":"Current","perf.toReach":"Distance to","perf.unlock":"U unlock","perf.remain":"tier left","trans.title":"NNB Transfer (In DApp)","trans.btn":"Transfer & Count Perf","trans.desc":"Transfer NNB in DApp: enter receiver address & amount, real on-chain transfer, auto convert to USDT performance (unlock tiers). Performance = actual amount, cannot fake.","mine.active":"Active","mine.inactive":"Inactive","mine.accel19":"19-gen boost","mine.clickClaim":"Claimable! Click to claim"};
// ---------- 日本語 ----------
NNB_DICT["ja"]={
 back:"戻る","wallet.connect":"ウォレット接続","price.market":"市場価格","price.origin":"元値:","price.total":"総上昇率:",
 "subscribe.title":"一括申込","subscribe.desc":"元2100万枚·申込で焼却·3倍産出","subscribe.price":"申込価格","subscribe.triple":"3倍産出",
 "mine.estReceive":"予定ロック産能(3倍)","subscribe.btn":"今すぐ申込","nav.tradeCenter":"取引センター","nav.buyMining":"鉱機購入",
 "nav.inviteShare":"招待共有","nav.activateNode":"ノード起動","banner.brand":"金牛聚財運 · 牛牛コイン","banner.fengshui":"2024-2043 離火大運 · NNB",
 "banner.reward":"NNB 注文報酬","banner.rewardDesc":"注文に参加し報酬獲得","banner.live":"上場","banner.title":"NNB 両建て",
 "banner.desc":"スマート永続契約,裁定利益をロック","banner.audit":"スマートコントラクト監査","banner.auditDesc":"安全な自動オンチェーン実行","banner.audited":"監査済み",
 "home.advantage":"主要強み","home.lever":"動的レバレッジ","home.leverDesc":"市場に応じ採掘レバレッジを動的調整","home.transparent":"透明性","home.transparentDesc":"全てコントラクトはチェーン上で検証可能","home.referral":"紹介システム","home.referralDesc":"友人を招待し追加報酬を獲得",
 "trade.title":"NNB/USDT 取引プール","trade.buy":"NNB購入","trade.sell":"NNB売却","trade.buyAmount":"USDT支払","trade.receive":"受取NNB(予定)","trade.price":"価格",
 "trade.buyBtn":"購入確認(注文)","trade.receiveUSDT":"受取USDT","trade.sellBtn":"売却確認","trade.pool":"プールUSDT総量","trade.poolClosed":"未開放",
 "common.refresh":"更新","common.connectFirst":"先にウォレット接続","trade.noBuyOrders":"購入注文なし","mine.price":"鉱機価格","common.all":"全て",
 "mine.purchaseHint":"NNB保有で購入可能,上限なし","mine.currentValue":"現在価値","mine.estBase":"予定基本NNB","mine.estTotal":"予定総採掘量","common.approve":"認可",
 "bind.title":"上級アドレス綁定","bind.desc":"鉱機購入前に上級を綁定(変更不可)","bind.btn":"綁定確認","mine.title":"私の鉱機","mine.status":"鉱機状態",
 "mine.capacity":"残り産能","mine.rate":"現在日率","mine.claimable":"今日受取可能","claim.timer.loading":"読み込み中...","mine.claim":"今日の収益を受取",
 "mine.gasHint":"受取に少量BNBガス必要","node.title":"ノードになりチーム報酬を得よう!","node.cost":"ノード起動: 500 USDT","node.income":"鉱機収益の9%追加",
 "invite.title":"私の紹介","invite.link":"紹介リンク(一括綁定)","common.connectToShow":"接続後に表示","invite.copy":"コピー","invite.id":"紹介ID",
 "common.notConnected":"未接続","invite.contract":"NNB契約アドレス","invite.desc":"紹介IDで友人を招待し、鉱機購入で収益獲得",
 "invite.count":"累計招待","invite.list":"招待者リスト","invite.empty":"まだ招待者がいません","node.btn":"ノード起動を承認","node.identity":"役割:鉱工",
 "node.website":"公式サイト","invite.promoId":"紹介ID","mine.reinvest":"再投資","mine.reinvestDesc":"再投資で3倍産能,最低2000NNB(約20U)",
 "mine.reinvestBtn":"再投資(最低2000NNB)","node.status":"ノード状態","profile.title":"私の収益","node.revenue":"ノード収益(9%)",
 "nav.home":"ホーム","nav.trade":"取引","nav.mining":"鉱機","nav.invite":"招待","nav.profile":"私",
 "trade.noOrders":"注文なし","profile.direct":"直推人数","profile.nodeIncome":"ノード収益(9%)","lang.title":"言語選択"
,"back":"戻る","brand.name":"牛牛コイン","brand.sub":"金 牛 聚 財 運","trade.amountUsdt":"USDT金額入力(最低200)","trade.amountNnb":"NNB数量入力","mine.amountBuy":"購入数量入力","bind.inputAddr":"上級ウォレット入力","trans.toAddr":"受取ウォレット(0x...)","trans.nnbAmt":"送金NNB数","invite.startSharing":"リンクを共有しよう!","node.dividend":"ノード配当(平均)","node.claimableDiv":"受取可能:","node.divHint":"累積、いつでも一括受取","node.divDesc":"受取の10%が配当プールへ、いつでも一括受取可能","common.claim":"受取","invite.unlockTitle":"実績解除代数","invite.unlockDesc":"累計直推実績(U)で代数解除","invite.tiers":"解除段階","invite.progress":"現在進度","invite.nextTier":"次の段階","invite.diamond":"ダイヤモンド","trade.myOrders":"私の注文","trade.buyOrders":"購入注文","trans.estPerf":"予定実績","trans.approveHint":"先にNNBをコントラクトへ承認してください(一度でOK)","perf.directAmt":"直推実績","perf.gen":"解除代数","perf.unit":"代","perf.maxReached":"全解除","perf.progress":"現在","perf.toReach":"まで","perf.unlock":"U解除","perf.remain":"代残","trans.title":"NNB 転送（DApp内）","trans.btn":"転送＆業績計上","trans.desc":"DApp内でNNB転送: 受取アドレスと数量を入力し、チェーン上で実転送、現在価格でUSDT業績に換算(解除)。業績=実際の転送量、偽造不可。","mine.active":"起動中","mine.inactive":"未起動","mine.accel19":"19代加速","mine.clickClaim":"受取可!今すぐ受取"};
// ---------- 한국어 ----------
NNB_DICT["ko"]={
 back:"돌아가기","wallet.connect":"지갑 연결","price.market":"시장가","price.origin":"원가:","price.total":"총등락:",
 "subscribe.title":"원클릭 구독","subscribe.desc":"원 2,100만개·구독시 소각·3배 생산","subscribe.price":"구독가","subscribe.triple":"3배 생산",
 "mine.estReceive":"예상 락 생산(3배)","subscribe.btn":"지금 구독","nav.tradeCenter":"거래센터","nav.buyMining":"광부 구매",
 "nav.inviteShare":"초대 공유","nav.activateNode":"노드 활성화","banner.brand":"황소 재물 · NNB 코인","banner.fengshui":"2024-2043 이화대운 · NNB",
 "banner.reward":"NNB 주문 보상","banner.rewardDesc":"주문 참여로 보상 획득","banner.live":"상장","banner.title":"NNB 공매 장세",
 "banner.desc":"스마트 영구계약, 차익 잠금","banner.audit":"스마트계약 감사","banner.auditDesc":"안전한 자동 온체인 실행","banner.audited":"감사완료",
 "home.advantage":"핵심 장점","home.lever":"동적 레버리지","home.leverDesc":"시장에 따라 채굴 레버리지 동적 조정","home.transparent":"투명성","home.transparentDesc":"모든 계약을 체인에서 검증 가능","home.referral":"추천 시스템","home.referralDesc":"친구 초대 및 추가 보상",
 "trade.title":"NNB/USDT 풀","trade.buy":"NNB 매수","trade.sell":"NNB 매도","trade.buyAmount":"USDT 지불","trade.receive":"받을 NNB(예상)","trade.price":"가격",
 "trade.buyBtn":"매수 확인(주문)","trade.receiveUSDT":"받을 USDT","trade.sellBtn":"매도 확인","trade.pool":"풀 USDT 총량","trade.poolClosed":"미개방",
 "common.refresh":"새로고침","common.connectFirst":"지갑 먼저 연결","trade.noBuyOrders":"구매 주문 없음","mine.price":"광부 가격","common.all":"전체",
 "mine.purchaseHint":"NNB 보유로 구매 가능, 무제한","mine.currentValue":"현재 가치","mine.estBase":"예상 기본 NNB","mine.estTotal":"예상 총 채굴량","common.approve":"승인",
 "bind.title":"상위 주소 바인딩","bind.desc":"광부 구매 전 상위 바인딩(변경 불가)","bind.btn":"바인딩 확인","mine.title":"내 광부","mine.status":"광부 상태",
 "mine.capacity":"잔여 생산","mine.rate":"현재 일일율","mine.claimable":"오늘 받기 가능","claim.timer.loading":"로딩중...","mine.claim":"오늘 수익 받기",
 "mine.gasHint":"받기에 소량 BNB 가스 필요","node.title":"노드가 되고 팀 보상 잠금해제!","node.cost":"노드 활성화: 500 USDT","node.income":"채굴 수익의 9% 추가",
 "invite.title":"내 추천","invite.link":"추천 링크(원클릭 바인딩)","common.connectToShow":"연결 후 표시","invite.copy":"복사","invite.id":"추천 ID",
 "common.notConnected":"미연결","invite.contract":"NNB 계약 주소","invite.desc":"추천 ID 공유, 친구가 광부 구매 시 보상",
 "invite.count":"총 초대","invite.list":"초대자 목록","invite.empty":"아직 초대자가 없습니다","node.btn":"노드 활성화 승인","node.identity":"역할: 광부",
 "node.website":"공식 사이트","invite.promoId":"추천 ID","mine.reinvest":"재투자","mine.reinvestDesc":"재투자로 3배 생산, 최소 2000 NNB(약20U)",
 "mine.reinvestBtn":"재투자(최소2000NNB)","node.status":"노드 상태","profile.title":"내 수익","node.revenue":"노드 수익(9%)",
 "nav.home":"홈","nav.trade":"거래","nav.mining":"광부","nav.invite":"초대","nav.profile":"내",
 "trade.noOrders":"주문 없음","profile.direct":"직추천 수","profile.nodeIncome":"노드 수익(9%)","lang.title":"언어 선택"
,"back":"돌아가기","brand.name":"우유코인","brand.sub":"황소 재물 운","trade.amountUsdt":"USDT 금액 입력(최소200)","trade.amountNnb":"NNB 수량 입력","mine.amountBuy":"구매 수량 입력","bind.inputAddr":"상위 지갑 입력","trans.toAddr":"수신 지갑(0x...)","trans.nnbAmt":"보낼 NNB","invite.startSharing":"링크 공유를 시작하세요!","node.dividend":"노드 배당(평균)","node.claimableDiv":"받기 가능:","node.divHint":"누적, 한번에 수령","node.divDesc":"수령의 10%가 배당 풀로, 언제든 한번에 수령","common.claim":"수령","invite.unlockTitle":"실적 해제대수","invite.unlockDesc":"누적 직추천 실적(U)로 대수 해제","invite.tiers":"해제 계단","invite.progress":"현재 진행","invite.nextTier":"다음 계단","invite.diamond":"다이아몬드","trade.myOrders":"내 주문","trade.buyOrders":"구매 주문","trans.estPerf":"예상 실적","trans.approveHint":"먼저 NNB를 컨트랙트에 승인하세요(한번이면 됨)","perf.directAmt":"직추천 실적","perf.gen":"해제 대수","perf.unit":"대","perf.maxReached":"완전 해제","perf.progress":"현재","perf.toReach":"까지","perf.unlock":"U 해제","perf.remain":"대 남음","trans.title":"NNB 전송 (DApp 내)","trans.btn":"전송&실적 반영","trans.desc":"DApp 내 NNB 전송: 수신 주소와 수량 입력, 체인 상 실전송, 현재가로 USDT 실적 환산(해제). 실적=실제 전송량, 위조 불가.","mine.active":"활성","mine.inactive":"비활성","mine.accel19":"19대 가속","mine.clickClaim":"받기! 바로 받기"};
// ---------- Tiếng Việt ----------
NNB_DICT["vi"]={
 back:"Quay lại","wallet.connect":"Kết nối ví","price.market":"Giá thị trường","price.origin":"Giá gốc:","price.total":"Tổng tăng:",
 "subscribe.title":"Đăng ký nhanh","subscribe.desc":"Gốc 21tr · Đốt khi đăng ký · Sản xuất x3","subscribe.price":"Giá đăng ký","subscribe.triple":"Sản xuất x3",
 "mine.estReceive":"Sản lượng khóa dự kiến (x3)","subscribe.btn":"Đăng ký ngay","nav.tradeCenter":"Trung tâm giao dịch","nav.buyMining":"Mua Miner",
 "nav.inviteShare":"Mời chia sẻ","nav.activateNode":"Kích hoạt Node","banner.brand":"Vàng Bò · Coin NNB","banner.fengshui":"Hỏa Vận 2024-2043 · NNB",
 "banner.reward":"Thưởng lệnh NNB","banner.rewardDesc":"Tham gia lệnh nhận thưởng","banner.live":"Ra mắt","banner.title":"NNB Mua/Bán",
 "banner.desc":"Hợp đồng thông minh, khóa chênh lệch","banner.audit":"Kiểm toán hợp đồng","banner.auditDesc":"Thực thi tự động an toàn","banner.audited":"Đã kiểm toán",
 "home.advantage":"Ưu điểm chính","home.lever":"Đòn bẩy động","home.leverDesc":"Tự điều chỉnh đòn bẩy khai thác","home.transparent":"Minh bạch","home.transparentDesc":"Hợp đồng xác minh trên chuỗi","home.referral":"Hệ thống giới thiệu","home.referralDesc":"Mời bạn bè nhận thưởng thêm",
 "trade.title":"Pool NNB/USDT","trade.buy":"Mua NNB","trade.sell":"Bán NNB","trade.buyAmount":"Trả USDT","trade.receive":"Nhận NNB (dự kiến)","trade.price":"Giá",
 "trade.buyBtn":"Xác nhận mua","trade.receiveUSDT":"Nhận USDT","trade.sellBtn":"Xác nhận bán","trade.pool":"Tổng USDT pool","trade.poolClosed":"Chưa mở",
 "common.refresh":"Làm mới","common.connectFirst":"Kết nối ví trước","trade.noBuyOrders":"Chưa có lệnh mua","mine.price":"Giá Miner","common.all":"Tất cả",
 "mine.purchaseHint":"Giữ NNB để mua miner, không giới hạn","mine.currentValue":"Giá trị hiện tại","mine.estBase":"NNB cơ bản dự kiến","mine.estTotal":"Tổng khai thác dự kiến","common.approve":"Phê duyệt",
 "bind.title":"Liên kết cấp trên","bind.desc":"Liên kết cấp trên trước khi mua miner","bind.btn":"Xác nhận liên kết","mine.title":"Miner của tôi","mine.status":"Trạng thái miner",
 "mine.capacity":"Sản lượng còn lại","mine.rate":"Lãi ngày hiện tại","mine.claimable":"Nhận hôm nay","claim.timer.loading":"Đang tải...","mine.claim":"Nhận lợi nhuận hôm nay",
 "mine.gasHint":"Cần chút BNB làm gas","node.title":"Thành Node & mở khóa thưởng!","node.cost":"Kích hoạt node: 500 USDT","node.income":"Thêm 9% thu nhập miner",
 "invite.title":"Giới thiệu của tôi","invite.link":"Link giới thiệu (liên kết nhanh)","common.connectToShow":"Hiện sau khi kết nối","invite.copy":"Sao chép","invite.id":"Mã giới thiệu",
 "common.notConnected":"Chưa kết nối","invite.contract":"Địa chỉ hợp đồng NNB","invite.desc":"Chia sẻ mã, bạn bè mua miner bạn nhận thưởng",
 "invite.count":"Tổng mời","invite.list":"Danh sách đã mời","invite.empty":"Chưa có người được mời","node.btn":"Phê duyệt kích hoạt Node","node.identity":"Vai trò: Thợ mỏ",
 "node.website":"Website chính thức","invite.promoId":"Mã giới thiệu","mine.reinvest":"Tái đầu tư","mine.reinvestDesc":"Tái đầu tư để sản xuất x3, tối thiểu 2000 NNB",
 "mine.reinvestBtn":"Tái đầu tư (tối thiểu 2000 NNB)","node.status":"Trạng thái Node","profile.title":"Thu nhập của tôi","node.revenue":"Thu nhập Node (9%)",
 "nav.home":"Trang chủ","nav.trade":"Giao dịch","nav.mining":"Miner","nav.invite":"Mời","nav.profile":"Tôi",
 "trade.noOrders":"Chưa có lệnh","profile.direct":"Số giới thiệu trực tiếp","profile.nodeIncome":"Thu nhập Node (9%)","lang.title":"Chọn ngôn ngữ"
,"back":"Quay lại","brand.name":"Bò Vàng","brand.sub":"Tài Lộc Bò Vàng","trade.amountUsdt":"Nhập USDT (tối thiểu 200)","trade.amountNnb":"Nhập số NNB","mine.amountBuy":"Nhập số mua","bind.inputAddr":"Nhập ví cấp trên","trans.toAddr":"Ví nhận (0x...)","trans.nnbAmt":"Số NNB chuyển","invite.startSharing":"Bắt đầu chia sẻ link!","node.dividend":"Cổ tức Node (bình quân)","node.claimableDiv":"Có thể nhận:","node.divHint":"Tích lũy · nhận bất cứ lúc nào","node.divDesc":"10% mỗi lần nhận vào quỹ chia Node; nhận cùng lúc bất cứ lúc nào","common.claim":"Nhận","invite.unlockTitle":"Mở khóa hệ số","invite.unlockDesc":"Mở khóa hệ số bằng doanh thu trực tiếp (U)","invite.tiers":"Thang mở khóa","invite.progress":"Tiến độ hiện tại","invite.nextTier":"Thang kế tiếp","invite.diamond":"Kim cương","trade.myOrders":"Lệnh của tôi","trade.buyOrders":"Lệnh mua","trans.estPerf":"Doanh thu dự kiến","trans.approveHint":"Vui lòng phê duyệt NNB cho hợp đồng trước (1 lần, tái dùng)","perf.directAmt":"Doanh thu trực tiếp","perf.gen":"Hệ số mở khóa","perf.unit":"hệ","perf.maxReached":"Mở khóa tối đa","perf.progress":"Hiện tại","perf.toReach":"còn","perf.unlock":"U mở","perf.remain":"hệ còn","trans.title":"NNB Chuyển (trong DApp)","trans.btn":"Chuyển & Tính Doanh thu","trans.desc":"Chuyển NNB trong DApp: nhập địa chỉ và số lượng, chuyển thật trên chuỗi, tự quy đổi USDT (mở khóa). Doanh thu=số thực chuyển, không giả mạo.","mine.active":"Đã kích hoạt","mine.inactive":"Chưa kích hoạt","mine.accel19":"19 hệ tăng tốc","mine.clickClaim":"Nhận được! Nhấn để nhận"};
// ---------- Bahasa Melayu ----------
NNB_DICT["ms"]={
 back:"Kembali","wallet.connect":"Sambung Dompet","price.market":"Harga Pasaran","price.origin":"Harga Asal:","price.total":"Jumlah Naik:",
 "subscribe.title":"Langgan Sekali Klik","subscribe.desc":"Asal 21j · Burn bila langgan · Produksi x3","subscribe.price":"Harga Langgan","subscribe.triple":"Produksi x3",
 "mine.estReceive":"Kapasiti terkunci (x3)","subscribe.btn":"Langgan Sekarang","nav.tradeCenter":"Pusat Dagangan","nav.buyMining":"Beli Miner",
 "nav.inviteShare":"Kongsi Jemptuan","nav.activateNode":"Aktifkan Node","banner.brand":"Lembu Emas · Syiling NNB","banner.fengshui":"Era Api 2024-2043 · NNB",
 "banner.reward":"Ganjaran Pesanan NNB","banner.rewardDesc":"Sertai pesanan dapat ganjaran","banner.live":"Live","banner.title":"NNB Long/Short",
 "banner.desc":"Kontrak pintar, kunci untung arbitraj","banner.audit":"Audit Kontrak Pintar","banner.auditDesc":"Protokol pada rangkaian automatik","banner.audited":"Diaudit",
 "home.advantage":"Kelebihan Utama","home.lever":"Leveraj Dinamik","home.leverDesc":"Laraskan leveraj perlombongan dinamik","home.transparent":"Telus","home.transparentDesc":"Semua kontrak boleh disahkan","home.referral":"Sistem Rujukan","home.referralDesc":"Jemput rakan, dapat ganjaran tambahan",
 "trade.title":"Kolam NNB/USDT","trade.buy":"Beli NNB","trade.sell":"Jual NNB","trade.buyAmount":"Bayar USDT","trade.receive":"Terima NNB (est)","trade.price":"Harga",
 "trade.buyBtn":"Sahkan Beli","trade.receiveUSDT":"Terima USDT","trade.sellBtn":"Sahkan Jual","trade.pool":"Jumlah USDT kolam","trade.poolClosed":"Tutup",
 "common.refresh":"Muat Semula","common.connectFirst":"Sambung dompet dulu","trade.noBuyOrders":"Tiada pesanan beli","mine.price":"Harga Miner","common.all":"Semua",
 "mine.purchaseHint":"Pegang NNB untuk beli miner, tanpa had","mine.currentValue":"Nilai Semasa","mine.estBase":"NNB asas est","mine.estTotal":"Jumlah perlombongan est","common.approve":"Lulus",
 "bind.title":"Ikat Rujukan Atas","bind.desc":"Ikat rujukan sebelum beli miner","bind.btn":"Sahkan Ikat","mine.title":"Miner Saya","mine.status":"Status Miner",
 "mine.capacity":"Kapasiti Baki","mine.rate":"Kadar Harian","mine.claimable":"Boleh Tuntut Hari Ini","claim.timer.loading":"Muat...","mine.claim":"Tuntut Hasil Hari Ini",
 "mine.gasHint":"Perlu sedikit BNB untuk gas","node.title":"Jadi Node & Buka Kunci Ganjaran!","node.cost":"Aktifkan node: 500 USDT","node.income":"Tambahan 9% hasil miner",
 "invite.title":"Rujukan Saya","invite.link":"Pautan Rujukan (1-klik)","common.connectToShow":"Tunjuk selepas sambung","invite.copy":"Salin","invite.id":"ID Rujukan",
 "common.notConnected":"Belum Disambung","invite.contract":"Alamat Kontrak NNB","invite.desc":"Kongsi ID, rakan beli miner anda dapat hasil",
 "invite.count":"Jumlah Jemputan","invite.list":"Senarai Jemputan","invite.empty":"Belum ada jemputan","node.btn":"Lulus Aktifkan Node","node.identity":"Peranan: Pelombong",
 "node.website":"Laman Web Rasmi","invite.promoId":"ID Rujukan","mine.reinvest":"Pelaburan Semula","mine.reinvestDesc":"Pelaburan semula untuk kapasiti x3, min 2000 NNB",
 "mine.reinvestBtn":"Pelaburan Semula (min 2000 NNB)","node.status":"Status Node","profile.title":"Hasil Saya","node.revenue":"Hasil Node (9%)",
 "nav.home":"Utama","nav.trade":"Dagang","nav.mining":"Miner","nav.invite":"Jemput","nav.profile":"Saya",
 "trade.noOrders":"Tiada pesanan","profile.direct":"Bilangan Rujukan Langsung","profile.nodeIncome":"Hasil Node (9%)","lang.title":"Pilih Bahasa"
,"back":"Kembali","brand.name":"Lembu Emas","brand.sub":"Rezeki Lembu Emas","trade.amountUsdt":"Masukkan USDT (min 200)","trade.amountNnb":"Masukkan NNB","mine.amountBuy":"Masukkan kuantiti","bind.inputAddr":"Masukkan dompet rujukan","trans.toAddr":"Dompet penerima (0x...)","trans.nnbAmt":"Nilai NNB hantar","invite.startSharing":"Mula kongsi pautan!","node.dividend":"Dividen Node (purata)","node.claimableDiv":"Boleh tuntut:","node.divHint":"Terkumpul · tuntut bila-bila","node.divDesc":"10% setiap tuntutan masuk kolam dividen Node; tuntut sekali gus bila-bila","common.claim":"Tuntut","invite.unlockTitle":"Buka Kunci Peruntukan","invite.unlockDesc":"Buka kunci tahap dengan prestasi langsung (U)","invite.tiers":"Tangga Buka Kunci","invite.progress":"Kemajuan Semasa","invite.nextTier":"Tangga Seterusnya","invite.diamond":"Berlian","trade.myOrders":"Pesanan Saya","trade.buyOrders":"Pesanan Beli","trans.estPerf":"Prestasi Est.","trans.approveHint":"Sila lulus NNB kepada kontrak dahulu (sekali, boleh guna semula)","perf.directAmt":"Prestasi Langsung","perf.gen":"Peruntukan Dibuka","perf.unit":"peringkat","perf.maxReached":"Dibuka penuh","perf.progress":"Semasa","perf.toReach":"jarak ke","perf.unlock":"U buka","perf.remain":"peringkat tinggal","trans.title":"NNB Pemindahan (Dalam DApp)","trans.btn":"Pindah & Kira Prestasi","trans.desc":"Pindah NNB dalam DApp: isi alamat & nilai, pindah sebenar on-chain, auto tukar ke prestasi USDT (buka kunci). Prestasi= nilai sebenar, tidak boleh palsu.","mine.active":"Aktif","mine.inactive":"Tak Aktif","mine.accel19":"19-peringkat akselerasi","mine.clickClaim":"Boleh tuntut! Klik untuk tuntut"};

// ===== 语言列表(国旗+原生语言名) =====
var NNB_LANGS=[
 {code:'zh-CN',flag:'🇨🇳',label:'简体中文'},
 {code:'zh-TW',flag:'🇭🇰',label:'繁體中文'},
 {code:'en',   flag:'🇺🇸',label:'English'},
 {code:'ja',   flag:'🇯🇵',label:'日本語'},
 {code:'ko',   flag:'🇰🇷',label:'한국어'},
 {code:'vi',   flag:'🇻🇳',label:'Tiếng Việt'},
 {code:'ms',   flag:'🇸🇬',label:'Bahasa Melayu'}
];
var LANG_KEY='nnb_lang2';

// ===== 扩充key的英文/其他语言翻译(避免切换后残留中文) =====
// brand品牌名保持原样不翻译; 其余用英文
var NNB_EXTRA_EN={
 "trade.amountUsdt":"Enter USDT amount (min 200)","trade.amountNnb":"Enter NNB amount",
 "mine.amountBuy":"Enter buy amount","bind.inputAddr":"Enter referrer wallet address",
 "trans.toAddr":"Receiver wallet address (0x...)","trans.nnbAmt":"Enter NNB amount to transfer",
 "trade.myOrders":"My Orders","trade.buyOrders":"Buy Orders","trans.estPerf":"Est. Performance",
 "trans.approveHint":"Please approve NNB to the contract first",
 "invite.unlockTitle":"Performance Unlock Tiers","invite.unlockDesc":"Unlock referral tiers by direct performance (U)","invite.tiers":"Unlock Ladder","invite.progress":"Current Progress","invite.nextTier":"Next Tier","invite.diamond":"Diamond",
 "node.dividend":"Node Dividend (avg)","node.claimableDiv":"Claimable:","node.divHint":"Accumulated, claim anytime","common.claim":"Claim","node.divDesc":"10% of each claim goes to node dividend pool; claim all at once anytime.","lang.title":"Select Language"
};
// 各语言扩充key(除中文外的语言用到) - 简化: 非zh用EN, 品牌名保持
var NNB_EXTRA_LANG={
 'zh-TW':{"trade.amountUsdt":"輸入 USDT 金額(最低 200)","invite.unlockTitle":"業績解鎖代數","trade.myOrders":"我的掛單列表","node.dividend":"節點分紅(平均)","common.claim":"領取"},
 'ja':{"trade.amountUsdt":"USDT金額入力(最低200)","trade.amountNnb":"NNB数量入力","mine.amountBuy":"購入数量入力","bind.inputAddr":"上級ウォレットアドレス入力","trans.toAddr":"受取ウォレットアドレス","trans.nnbAmt":"送金NNB数" ,"trade.myOrders":"私の注文","invite.unlockTitle":"実績解除代数"},
 'ko':{"trade.amountUsdt":"USDT 금액 입력(최소 200)","trade.amountNnb":"NNB 수량 입력","mine.amountBuy":"구매 수량 입력","bind.inputAddr":"상위 지갑 주소 입력","trans.toAddr":"수신 지갑 주소","trans.nnbAmt":"보낼 NNB 수량","trade.myOrders":"내 주문","invite.unlockTitle":"실적 해제대수"},
 'vi':{"trade.amountUsdt":"Nhập USDT (tối thiểu 200)","trade.amountNnb":"Nhập số NNB","mine.amountBuy":"Nhập số mua","bind.inputAddr":"Nhập địa chỉ cấp trên","trans.toAddr":"Địa chỉ ví nhận","trans.nnbAmt":"Số NNB chuyển","trade.myOrders":"Lệnh của tôi","invite.unlockTitle":"Mở khóa hệ số"},
 'ms':{"trade.amountUsdt":"Masukkan USDT (min 200)","trade.amountNnb":"Masukkan NNB","mine.amountBuy":"Masukkan kuantiti","bind.inputAddr":"Masukkan alamat rujukan","trans.toAddr":"Alamat dompet penerima","trans.nnbAmt":"Nilai NNB hantar","trade.myOrders":"Pesanan Saya","invite.unlockTitle":"Buka Kunci Peruntukan"}
};
function __EXTRA_DICT(lang){
  var d={};
  if(lang==='en'||lang==='ja'||lang==='ko'||lang==='vi'||lang==='ms'){Object.assign(d,NNB_EXTRA_EN);}
  if(NNB_EXTRA_LANG[lang]){Object.assign(d,NNB_EXTRA_LANG[lang]);}
  return d;
}
function __mergeDict(lang){
  var base=NNB_DICT[lang]||NNB_DICT['zh-CN'];
  var ex=__EXTRA_DICT(lang);
  var out={};for(var k in base)out[k]=base[k];for(var k in ex)out[k]=ex[k];
  return out;
}

function currentLang(){try{var stored=localStorage.getItem(LANG_KEY);if(stored&&NNB_DICT[stored]){return stored}}catch(e){}try{var nav=(navigator.language||'').toLowerCase();if(nav.indexOf('en')>-1)return 'en';if(nav.indexOf('ja')>-1)return 'ja';if(nav.indexOf('ko')>-1)return 'ko';if(nav.indexOf('vi')>-1)return 'vi';if(nav.indexOf('ms')>-1||nav.indexOf('id')>-1)return 'ms';if(nav.indexOf('zh')>-1)return 'zh-CN';}catch(e){}return 'zh-CN'}
function mapNavigator(lang){
  var l=(lang||'').toLowerCase();
  if(l.indexOf('en')>-1)return 'en';if(l.indexOf('ja')>-1)return'ja';
  if(l.indexOf('ko')>-1)return'ko';if(l.indexOf('vi')>-1)return'vi';
  if(l.indexOf('ms')>-1||l.indexOf('id')>-1)return'ms';if(l.indexOf('zh')>-1)return'zh-TW';
  return 'zh-CN';
}
function saveLang(l){try{localStorage.setItem(LANG_KEY,l)}catch(e){}}

// ===== 一次到位: 应用语言到所有 data-i18n 元素 =====
function nnbApplyLang(){
  var lang=currentLang();
  var dict=__mergeDict(lang);
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k=el.getAttribute('data-i18n');
    if(dict[k]!=null&&dict[k]!==''){el.innerHTML=dict[k];}
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
    var k=el.getAttribute('data-i18n-placeholder');
    if(dict[k]!=null&&dict[k]!==''){el.setAttribute('placeholder',dict[k]);}
  });
  // 兜底: 扫描DOM文本,把残留的中文(匹配zh-CN词典)替换为当前语言,避免硬编码残留
  if(lang!=='zh-CN'){
    var z=NNB_DICT['zh-CN']; var cur=dict;
    var walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var t=n.nodeValue||'';if(!/[一-鿿]/.test(t))return NodeFilter.FILTER_REJECT;if(t.trim().length>50)return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT}});
    var node;var nodes=[];
    while(node=walker.nextNode()){nodes.push(node)}
    for(var i=0;i<nodes.length;i++){
      var nd=nodes[i];var t=(nd.nodeValue||'');
      for(var k in z){ if(z[k]&&z[k]===t.trim()&&cur[k]){ nd.nodeValue=cur[k]; break; } }
    }
  }
  // 更新 lang 属性
  try{document.documentElement.lang=lang;}catch(e){}
  // 触发可选的回调
  if(typeof nnbAfterLang==='function'){try{nnbAfterLang(lang)}catch(e){}}
}

// ===== 下拉菜单语言面板(国旗+原生名) =====
function nnbToggleLangPanel(){
  var old=document.getElementById('nnbLangPanel');
  if(old){old.style.display=old.style.display==='none'?'block':'none';return;}
  var panel=document.createElement('div');
  panel.id='nnbLangPanel';
  panel.style.cssText='position:fixed;top:12px;right:12px;background:rgba(20,26,45,0.97);border:1px solid #3a4666;border-radius:14px;padding:8px 6px;z-index:99999;box-shadow:0 12px 40px rgba(0,0,0,.6);min-width:190px;backdrop-filter:blur(8px)';
  var cur=currentLang();
  var html='<div style="padding:10px 16px 6px;color:#8b93a8;font-size:11px;letter-spacing:1px;border-bottom:1px solid rgba(255,255,255,.08)">'+ (NNB_DICT[cur]?NNB_DICT[cur]['lang.title']:'选择语言') +'</div>';
  NNB_LANGS.forEach(function(l){
    html+='<div onclick="nnbSetLang(\''+l.code+'\')" style="display:flex;align-items:center;gap:10px;padding:11px 14px;cursor:pointer;border-radius:9px;color:#e8ecf5;font-size:14px;margin:1px 0;'+(l.code===cur?'background:rgba(212,175,55,.18);color:#f0d568;':'')+'">'
      +'<span style="font-size:17px">'+l.flag+'</span><span style="font-weight:'+(l.code===cur?'800':'500')+'">'+l.label+'</span>'
      +'</div>';
  });
  panel.innerHTML=html;
  panel.onmouseleave=function(){setTimeout(function(){if(panel)panel.style.display='none'},400)};
  document.body.appendChild(panel);
}
function nnbSetLang(l){saveLang(l);nnbApplyLang();var p=document.getElementById('nnbLangPanel');if(p)p.style.display='none';window.scrollTo&&(typeof nnbAfterLang==='function'?null:0)}

// 页面加载时应用语言
(function(){
  if(typeof document!=='undefined'){
    if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',nnbApplyLang)}
    else{setTimeout(nnbApplyLang,0)}
  }
})()



;


// ===== 语言切换后重渲染动态内容 =====
function nnbAfterLang(){
  if(typeof updatePerfUnlock==='function'){try{updatePerfUnlock()}catch(e){}}
}


// ===== 帮助: JS动态内容取当前语言翻译 =====
function nnbT(key){try{var lg=currentLang();var dt=__mergeDict(lg);return (dt[key]!=null&&dt[key]!=='')?dt[key]:key;}catch(e){return key}}
function nnbAfterLang(){if(typeof updatePerfUnlock==='function'){try{updatePerfUnlock()}catch(e){}}}

