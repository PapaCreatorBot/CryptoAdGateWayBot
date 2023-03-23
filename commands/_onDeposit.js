/*CMD
  command: /onDeposit
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Error
var error = options.result.error
if (error) {
  return Bot.sendMessage(options.result.error.message)
}
//Generated address
var address= options.result.address
if(address){
return Bot.sendMessage(address)
}
//New deposit
var hash = options.result.hash
if(hash){
return Bot.sendMessage("New Deposit amount: "+amount+" BTT"+hash)
}
