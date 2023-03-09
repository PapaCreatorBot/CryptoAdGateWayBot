/*CMD
  command: ➖ Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var api_key = "YOUR API KEY HERE"
var secret_key = "SECRET KEY HERE"
Libs.CryptoAdGateWayBot.Withdraw({
  api_key:api_key,
  secret_key: secret_key,
  currency: "DGB",
  amount: "0.006",
  address: "dgb1qlk3eftxrshrnyy3yx6m2rccdvx872gmcl5gcrs",
  user: user.id,
  success: "/onWithdraw"
})
//1. You need to Run /setup
//2. Setup your API key and secret Key in admin panel
