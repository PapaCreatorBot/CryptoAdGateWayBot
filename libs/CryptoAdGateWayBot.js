let libPrefix = "CryptoAdGateWayBotLib"
let lib = {
  cdm: "Notification",
  endpoint:
    "bots/725421/new-webhook?&command=connect&public_user_token=919138ec0afd896221a03ef2bd840a27&user_id=8785339",
  url: "https://api.bots.business/v1/"
}
//HTTP
function HttpCall(Options) {
  HTTP.post(Options)
}
//withdraw
function Withdraw(options) {
  var callback = Libs.Webhooks.getUrlFor({
    command: "/" + libPrefix + lib.cdm + " " + options.success,
    user_id: options.user
  })
   if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
  HttpCall({
    url: lib.url + lib.endpoint,
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
    command: "/" + libPrefix + lib.cdm + " " + options.success,
    user_id: options.user
  })
    if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
  HttpCall({
    url: lib.url + lib.endpoint,
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
    command: "/" + libPrefix + lib.cdm + " " + options.success,
    user_id: options.user
  })
    if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
  HttpCall({
    url: lib.url + lib.endpoint,
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
    command: "/" + libPrefix + lib.cdm + " " + options.success,
    user_id: options.user
  })
  if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
  HttpCall({
    url: lib.url + lib.endpoint,
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
    command: "/" + libPrefix + lib.cdm + " " + options.success,
    user_id: options.user
  })
  if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
  HttpCall({
    url: lib.url + lib.endpoint,
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
    command: "/" + libPrefix + lib.cdm + " " + options.success,
    user_id: options.user
  })
  if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
  HttpCall({
    url: lib.url + lib.endpoint,
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
//Notify
function onNotification() {
  if (!content) {
    return
  }
  Bot.run({ command: params, options: { result: JSON.parse(content) } })
}
publish({
  setup: setupAdminPanel,
  Withdraw: Withdraw,
  Deposit: Deposit,
  GetBalance: GetBalance,
  GenerateKey: GenerateKey,
  History: History,
  Transfer: Transfer
})
on("/" + libPrefix + lib.cdm, onNotification)
