if (!content) {
  return
}
var json = JSON.parse(content)
if (json.balance) {
  return Bot.run({
    command: "onBalance",
    options: { result: JSON.parse(content) }
  })
}
if (json.deposit) {
  return Bot.run({
    command: "onDeposit",
    options: { result: JSON.parse(content) }
  })
}
if (json.address) {
  return Bot.run({
    command: "onAddress",
    options: { result: JSON.parse(content) }
  })
}
if (json.withdraw) {
  return Bot.run({
    command: "onWithdraw",
    options: { result: JSON.parse(content) }
  })
}
//Error options
Bot.inspect(content)
