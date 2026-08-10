// ===== NNB 语言系统 =====
// 支持 简体中文(zh-CN) 繁体中文(zh-TW) English(en)
// 提供: nnbApplyLang() 应用语言, nnbToggleLangPanel() 切换面板
var NNB_LANG = {
  "zh-CN": {
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
    "trade.price":"价格","trade.buyBtn":"确认买入(挂单)","trade.receiveUSDT":"收到 USDT (预计 90%)","trade.sellBtn":"确认卖出",
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
    "trade.noOrders":"暂无挂单","profile.direct":"直推人数","profile.nodeIncome":"节点收益(9%)"
  },
  "zh-TW": {
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
    "trade.price":"價格","trade.buyBtn":"確認買入(掛單)","trade.receiveUSDT":"收到 USDT (預計 90%)","trade.sellBtn":"確認賣出",
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
    "trade.noOrders":"暫無掛單","profile.direct":"直推人數","profile.nodeIncome":"節點收益(9%)"
  },
  "en": {
    back:"Back","wallet.connect":"Connect Wallet","price.market":"Market Price","price.origin":"Original:","price.total":"Total:",
    "subscribe.title":"Subscribe","subscribe.desc":"Orig 21M · Burn on sub · 3x capacity","subscribe.price":"Sub Price","subscribe.triple":"3x output",
    "mine.estReceive":"Est locked cap (3x)","subscribe.btn":"Subscribe Now","nav.tradeCenter":"Trade","nav.buyMining":"Buy Miner",
    "nav.inviteShare":"Invite","nav.activateNode":"Activate Node","banner.brand":"Bull Gold · NNB Coin","banner.fengshui":"Fire Era 2024-2043 · NNB",
    "banner.reward":"NNB Order Rewards","banner.rewardDesc":"Earn rewards from orders","banner.live":"Live","banner.title":"NNB Long/Short",
    "banner.desc":"Smart perpetual locking arbitrage","banner.audit":"Smart Contract Audit","banner.auditDesc":"Safe automated on-chain protocol","banner.audited":"Audited",
    "home.advantage":"Core Advantage","home.lever":"Dynamic Leverage","home.leverDesc":"Adjust mining leverage dynamically","home.transparent":"Transparent",
    "home.transparentDesc":"All contracts verifiable on-chain","home.referral":"Referral","home.referralDesc":"Invite friends, earn rewards",
    "trade.title":"NNB/USDT Pool","trade.buy":"Buy NNB","trade.sell":"Sell NNB","trade.buyAmount":"Pay USDT","trade.receive":"Receive NNB (est)",
    "trade.price":"Price","trade.buyBtn":"Confirm Buy","trade.receiveUSDT":"Receive USDT (est 90%)","trade.sellBtn":"Confirm Sell",
    "trade.pool":"Pool USDT Total","trade.poolClosed":"Closed","common.refresh":"Refresh","common.connectFirst":"Connect wallet first",
    "trade.noBuyOrders":"No buy orders","mine.price":"Miner Price","common.all":"All","mine.purchaseHint":"Hold NNB to buy miner, no limit.",
    "mine.currentValue":"Current Value","mine.estBase":"Est Base NNB","mine.estTotal":"Est Total Output","common.approve":"Approve",
    "bind.title":"Bind Referrer","bind.desc":"Bind referrer before buying miner","bind.btn":"Confirm Bind",
    "mine.title":"My Miner","mine.status":"Miner Status","mine.capacity":"Remaining","mine.rate":"Daily Rate","mine.claimable":"Claimable Today",
    "claim.timer.loading":"Loading...","mine.claim":"Claim Today's Yield","mine.gasHint":"Needs tiny BNB for gas",
    "node.title":"Become a Node, Unlock Team Rewards!","node.cost":"Activate node for 500 USDT","node.income":"Extra 9% of mining income",
    "invite.title":"My Referral","invite.link":"My Referral Link","common.connectToShow":"Connect to show","invite.copy":"Copy",
    "invite.id":"My Referral ID","common.notConnected":"Not Connected","invite.contract":"NNB Contract",
    "invite.desc":"Share your Referral ID, earn when friends buy miner.","invite.count":"Total Invites",
    "invite.list":"Invitee List","invite.empty":"No invitees yet, share your link!","node.btn":"Authorize & Activate Node","node.identity":"Role: Miner",
    "node.website":"Website","invite.promoId":"Referral ID","mine.reinvest":"Reinvest","mine.reinvestDesc":"Reinvest for 3x capacity, min 2000 NNB (~20U).",
    "mine.reinvestBtn":"Reinvest (min 2000 NNB)","node.status":"Node Status","profile.title":"My Earnings","node.revenue":"Node Income (9%)",
    "nav.home":"Home","nav.trade":"Trade","nav.mining":"Miner","nav.invite":"Invite","nav.profile":"Me",
    "trade.noOrders":"No orders","profile.direct":"Directs","profile.nodeIncome":"Node Income (9%)"
  }
};
var LANG_STORAGE='nnb_lang';
function currentLang(){try{return localStorage.getItem(LANG_STORAGE)||'zh-CN'}catch(e){return 'zh-CN'}}
function saveLang(l){try{localStorage.setItem(LANG_STORAGE,l)}catch(e){}}
function nnbApplyLang(){
  var lang=currentLang();
  var dict=NNB_LANG[lang]||NNB_LANG['zh-CN'];
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k=el.getAttribute('data-i18n');
    if(dict[k]!=null){
      // 保留内部span等子元素: 只替换首层文本节点 if only text
      el.dataset._orig=el.innerHTML;
      el.innerHTML=dict[k];
    }
  });
}
function nnbToggleLangPanel(){
  var panel=document.getElementById('langPanel');
  if(panel){panel.style.display=panel.style.display==='block'?'none':'block';return;}
  // 动态创建语言面板
  panel=document.createElement('div');
  panel.id='langPanel';
  panel.style.cssText='position:fixed;top:14px;right:14px;background:#151a2e;border:1px solid #2a3150;border-radius:12px;padding:12px;z-index:9999;box-shadow:0 8px 30px rgba(0,0,0,.5)';
  var langs=[['zh-CN','简体中文'],['zh-TW','繁體中文'],['en','English']];
  var html='';
  langs.forEach(function(it){html+='<div onclick="nnbSetLang(\''+it[0]+'\')" style="padding:8px 16px;cursor:pointer;color:#e8ecf5;border-radius:8px">'+it[1]+'</div>';});
  panel.innerHTML=html+'<div style="text-align:center;font-size:11px;color:#8b93a8;margin-top:6px">选择语言</div>';
  document.body.appendChild(panel);
}
function nnbSetLang(l){saveLang(l);nnbApplyLang();var p=document.getElementById('langPanel');if(p)p.style.display='none';window.nnbApplyLang&&nnbApplyLang();location.reload&&(typeof nnbAfterLang==='function'?nnbAfterLang():0)}
// 页面加载应用语言
if(typeof document!=='undefined'){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',nnbApplyLang)}else{nnbApplyLang()}}
