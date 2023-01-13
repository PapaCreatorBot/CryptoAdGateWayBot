/*CMD
  command: /onWithdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//you will receive progress withdrawal and complete withdraw
//You need to add logic to catch complete withdrawal
//var progress = options.result.progress
//if(progress){return Bot.sendMessage("Withdrawal progress")}
Bot.inspect(options)
