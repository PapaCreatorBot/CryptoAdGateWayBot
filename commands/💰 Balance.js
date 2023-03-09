/*CMD
  command: 💰 Balance
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
Libs.CryptoAdGateWayBot.GetBalance({
api_key:api_key,
  secret_key: secret_key,
  currency: "DGB",
  user: user.id,
  success: "/onBalance"
})
//1. You need to Run /setup
//2. Setup your API key and secret Key in admin panel
