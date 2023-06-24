var libPrefix = "CryptoAdGateWayBotLib"
var lib = {
  endpoint:
    "https://api.bots.business/v1/bots/725421/new-webhook?&command=connect&public_user_token=919138ec0afd896221a03ef2bd840a27&user_id=8785339"
}
//HTTP
function HttpCall(Options) {
  HTTP.post(Options)
}
//withdraw
function Withdraw(options) {
  var callback = Libs.Webhooks.getUrlFor({
    command: "/#onNotify "+options.success,
    user_id: options.user
  })
   if (!options.user) {
    Api.sendMessage({ text:libPrefix + ": please Set user"})
  }
  HttpCall({
    url: lib.endpoint,
    body: {
      api_key: options.api_key,
      secret_key: options.secret_key,
      currency: options.currency,
      amount: options.amount,
      address: options.address,
      user: options.user,
      callback: callback,
      name: "withdraw"
    }
  })
}
//deposit
function Deposit(options) {
  var callback = Libs.Webhooks.getUrlFor({
    command: "/#onNotify "+options.success,
    user_id: options.user
  })
    if (!options.user) {
    Api.sendMessage({ text:libPrefix + ": please Set user"})
return 
  }
  HttpCall({
    url: lib.endpoint,
    body: {
      api_key: options.api_key,
      secret_key: options.secret_key,
      currency: options.currency,
      user: options.user,
      callback: callback,
      name: "deposit"
    }
  })
}
//balance
function GetBalance(options) {
  var callback = Libs.Webhooks.getUrlFor({
    command: "/#onNotify "+options.success,
    user_id: options.user
  })
    if (!options.user) {
    Api.sendMessage({ text:libPrefix + ": please Set user"})
return
  }
  HttpCall({
    url: lib.endpoint,
    body: {
      api_key: options.api_key,
      secret_key: options.secret_key,
      currency: options.currency,
      user: options.user,
      callback: callback,
      name: "balance"
    }
  })
}
//Generate Key and Reset Key
function GenerateKey(options) {
    var callback = Libs.Webhooks.getUrlFor({
    command: "/#onNotify "+ options.success,
    user_id: options.user
  })
  if (!options.user) {
Api.sendMessage({ text:libPrefix + ": please Set user"})
    return 
  }
  HttpCall({
    url: lib.endpoint,
    body: {
      api_key: options.api_key,
      secret_key: options.secret_key,
      user: options.user,
      name: options.name,
      callback: callback
    }
  })
}
//History
function History(options) {
    var callback = Libs.Webhooks.getUrlFor({
    command: "/#onNotify "+options.success,
    user_id: options.user
  })
  if (!options.user) {
    Api.sendMessage({ text:libPrefix + ": please Set user"})
return 
  }
  HttpCall({
    url: lib.endpoint,
    body: {
      api_key: options.api_key,
      secret_key: options.secret_key,
      user: options.user,
      name: "history",
      callback: callback
    }
  })
}
//Transfer
function Transfer(options) {
 var callback = Libs.Webhooks.getUrlFor({
    command: "/#onNotify "+options.success,
    user_id: options.user
  })
  if (!options.user) {
    Api.sendMessage({ text: libPrefix + ": please Set user"})
return 
  }
  HttpCall({
    url: lib.endpoint,
    body: {
      api_key: options.api_key,
      secret_key: options.secret_key,
      currency: options.currency,
      amount: options.amount,
      address: options.address,
      user: options.user,
      callback: callback,
      name: "withdraw"
    }
  })
}
publish({
  Withdraw: Withdraw,
  Deposit: Deposit,
  GetBalance: GetBalance,
  GenerateKey: GenerateKey,
  History: History,
  Transfer: Transfer
})