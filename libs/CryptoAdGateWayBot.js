let libPrefix = "CryptoAdGateWayBotLib";
let lib = {
  endpoint: "",
  commands: {
    onNotification: libPrefix + "_onNotification",
    onApiCall: libPrefix + "_onApiCall",
    onApiError: libPrefix + "_onApiCallError"
  },
  panelName: libPrefix + "Options"
}

function setupAdminPanel(){
  var webhookUrl = Libs.Webhooks.getUrlFor({
    command: lib.commands.onNotification
  })

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
  });
}
