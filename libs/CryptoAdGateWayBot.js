let libPrefix = "CryptoAdGateWayBotLib"
let lib = {
  cdm: "Notification",
  endpoint:
    "https://api.bots.business/v1",
  panelName: libPrefix + "Options"
}

function setupAdminPanel() {
  var panel = {
    title: "CryptoAdGateWayBot options",
    description: "Options for CryptoAdGateWayBot Lib",
    icon: "logo-bitcoin",

    fields: [
      {
        name: "APIKey",
        title: "API Key",
        description: "you can get your API key in @CryptoAdGateWayBot",
        type: "password",
        placeholder: "API Key",
        icon: "key"
      },
      {
        name: "SecretAPIKey",
        title: "Secret API Key",
        description: "you can get your Secret API key in @CryptoAdGateWayBot",
        type: "password",
        placeholder: "Secret API Key",
        icon: "key"
      }
    ]
  }

  AdminPanel.setPanel({
    panel_name: lib.panelName,
    data: panel,
    force: false // default false - save fields values
  })
}
function getOptions() {
  return AdminPanel.getPanelValues(lib.panelName)
}
function setup() {
  setupAdminPanel()
}
//withdraw
function Withdraw(options) {
if (!options.success) {
    throw new Error(libPrefix + ": Please Setup onsuccess")
  }
  var callback = Libs.Webhooks.getUrlFor({
    command: "/"+libPrefix+lib.cdm+" "+options.success,
    user_id: options.user
  })
  var apiKey = options.api_key || getOptions().APIKey
  var secretKey = options.secret_key || getOptions().SecretAPIKey
  if (!apiKey) {
    throw new Error(libPrefix + ": Please Setup ApiKey")
  }
  if (!secretKey) {
    throw new Error(libPrefix + ": Please Setup secretKey")
  }
  if (!options.amount) {
    throw new Error(libPrefix + ": Please Set amount")
  }
  if (!options.currency) {
    throw new Error(libPrefix + ": Please Set currency")
  }
  if (!options.address) {
    throw new Error(libPrefix + ": Please Set Wallet address")
  }
  if (!options.user) {
   throw new Error(libPrefix + ": please Set user")
  }
  HTTP.post({
    url: lib.endpoint+"/bots/721985/new-webhook?&command=connect&public_user_token=d31dddf790f86c212487246679171413&user_id=8785339",
    body: {
      api_key: apiKey,
      secret_key: secretKey,
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
if (!options.success) {
    throw new Error(libPrefix + ": Please Setup onsuccess")
  }
var callback = Libs.Webhooks.getUrlFor({
    command: "/"+libPrefix+lib.cdm+" "+options.success,
    user_id: options.user
  })
  var apiKey = options.api_key || getOptions().APIKey
  var secretKey = options.secret_key || getOptions().SecretAPIKey
  if (!apiKey) {
    throw new Error(libPrefix + ": Please Setup ApiKey")
  }
  if (!secretKey) {
    throw new Error(libPrefix + ": Please Setup secretKey")
  }
  if (!options.currency) {
    throw new Error(libPrefix + ": Please Set currency")
  }
  if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
  HTTP.post({
    url: lib.endpoint+"/bots/721985/new-webhook?&command=connect&public_user_token=d31dddf790f86c212487246679171413&user_id=8785339",
    body: {
      api_key: apiKey,
      secret_key: secretKey,
      currency: options.currency,
      user: options.user,
      callback: callback,
      name: "deposit"
    }
  })
}
//balance 
function GetBalance(options) {
  if (!options.success) {
    throw new Error(libPrefix + ": Please Setup onsuccess")
  }
var callback = Libs.Webhooks.getUrlFor({
    command: "/"+libPrefix+lib.cdm+" "+options.success,
    user_id: options.user
  })
var apiKey = options.api_key || getOptions().APIKey
  var secretKey = options.secret_key || getOptions().SecretAPIKey
  if (!apiKey) {
    throw new Error(libPrefix + ": Please Setup ApiKey")
  }
  if (!secretKey) {
    throw new Error(libPrefix + ": Please Setup secretKey")
  }
  if (!options.currency) {
    throw new Error(libPrefix + ": Please Set currency")
  }
  if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
  HTTP.post({
    url: lib.endpoint+"/bots/721985/new-webhook?&command=connect&public_user_token=d31dddf790f86c212487246679171413&user_id=8785339",
    body: {
      api_key: apiKey,
      secret_key: secretKey,
      currency: options.currency,
      user: options.user,
      callback: callback,
      name: "balance"
    }
  })
}
function onNotification(){
  if(!content){ return }
  Bot.run({ command: params, options:{ result:JSON.parse(content)} })
}
function GenerateKey(options){
if (!options.user) {
    throw new Error(libPrefix + ": Please Setup user")
  }
HTTP.post({
    url: lib.endpoint+"/bots/721985/new-webhook?&command=connect&public_user_token=d31dddf790f86c212487246679171413&user_id=8785339",
    body: {
      user: options.user
    }
  })
}
publish({
  setup: setup,
  Withdraw: Withdraw,
  Deposit: Deposit,
  GetBalance: GetBalance,
  GenerateKey: GenerateKey
})
on("/"+libPrefix+lib.cdm, onNotification)
