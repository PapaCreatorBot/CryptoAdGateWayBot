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
Libs.CryptoAdGateWayBot.GetBalance({
  currency: "DGB",
  user: user.id,
  success: "/onBalance"
})
//1. You need to Run /setup
//2. Setup your API key and secret Key in admin panel
