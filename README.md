# CryptoAdGateWayBot

## HOW TO USE

1. Install Lib using admin command " `/libs 123` "
2. Make command example: balance

CODE:
```javascript
var api_key = "YOUR API KEY HERE"
var secret_key = "SECRET KEY HERE"
var currency= "BTT"
Libs.CryptoAdGateWayBot.GetBalance({
  api_key: api_key,
  secret_key: secret_key,
  currency: currency,
// default user.id required
  user: user.id,
  success: "/onBalance"
})
```

on "/onBalance" command receive data

# CryptoAdGateWayBot Can be used

`Withdraw`,`Deposit`,`GetBalance`,`GenerateKey`,`History`,`Transfer`