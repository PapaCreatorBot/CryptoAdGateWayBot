if(!content){return}
if (content.balance) {
return Bot.run({
    command: "Your command check balance",
    options: { result: content }
  })
}
if (content.deposit) {
  return Bot.run({
    command: "Your command deposit notification",
    options: { result: content }
  })
}
if (content.address) {
  return Bot.run({
    command: "Your command deposit generate address",
    options: { result: content }
  })
}
if (content.withdraw) {
  return Bot.run({
    command: "Your command withdrawals notification",
    options: { result: content }
  })
}
//Error options
Bot.inspect(content)
