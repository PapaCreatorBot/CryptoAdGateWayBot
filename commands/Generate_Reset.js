/*CMD
  command: Generate/Reset
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Generate - get new API key and Secret Key 

Reset - reset old API key and generate new Key
  ANSWER
  keyboard: generate,reset\nback
  aliases: 
CMD*/

//To generate key you need to pass your user.id
//To reset key you need to pass your API key and Secret Key
var required = message == "generate" || message == "reset"
if (required) {
  Libs.CryptoAdGateWayBot.GenerateKey({
    user: user.id,
    name: message,
    success: "/onGenerate"
  })
}
//1. You need to Run /setup
//2. Setup your API key and secret Key in admin panel
