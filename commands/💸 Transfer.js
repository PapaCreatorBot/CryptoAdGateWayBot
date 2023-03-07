/*CMD
  command: 💸 Transfer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CryptoAdGateWayBot.Transfer({
  amount: 1,
  currency: "DGB",
  address: "telegramid"
  user: user.id,
  success: "/onTransfer"
})
//1. You need to Run /setup
//2. Setup your API key and secret Key in admin panel
