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

var error = options.result
if(error.error){
return Bot.sendMessage(error.message)
}
Bot.inspect(options)
