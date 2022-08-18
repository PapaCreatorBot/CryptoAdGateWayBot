//To generate key you need to pass your user.id
//To reset key you need to pass your API key and Secret Key
Libs.CryptoAdGateWayBot.GenerateKey({
  user: user.id,
  name: "generate or reset",
  success: "/onGenerate"
})
//1. You need to Run /setup
//2. Setup your API key and secret Key in admin panel
