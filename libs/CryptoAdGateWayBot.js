let libPrefix = "CryptoAdGateWayBotLib";
let lib = {
  endpoint: "https://api.bots.business/v1/bots/721985/new-webhook?&command=connect&public_user_token=5e81ca1129efa83d2142f19bba0db32d&user_id=8785339",
  commands: {
    onNotification: libPrefix + "_onNotification",
    onApiCall: libPrefix + "_onApiCall",
    onApiError: libPrefix + "_onApiCallError"
  },
  panelName: libPrefix + "Options"
}

function setupAdminPanel(){

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
