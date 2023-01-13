/*CMD
  command: /onDeposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//you will receive deposit address and complete deposit
//You can use logic to catch complete deposit
//var address = options.result.address
//if(address){return Bot.sendMessage("`"+address+"`")}
Bot.inspect(options)
