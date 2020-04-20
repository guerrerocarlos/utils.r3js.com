var fetch = require("node-fetch")
var currenciesJson = 'https://core.telegram.org/bots/payments/currencies.json'

function teletramRates(userCurr, baseCurr) {
  return fetch(currenciesJson)
    .then(res => res.json())
    .then(rates => {
      // console.log(rates)
      var clientCurrency = rates[userCurr]
      if (baseCurr) {
        var baseCurrency = rates[baseCurr]
        if (clientCurrency && baseCurrency) {
          exchangeRate = (clientCurrency.min_amount / Math.pow(10, clientCurrency.exp)) / (baseCurrency.min_amount / Math.pow(10, baseCurrency.exp))
          return Object.assign(rates[userCurr], { exchangeRate })
        }
      }
      return rates[userCurr]
    })
}

if (require.main === module) {
  (async () => {
    var response = await teletramRates('EUR', 'UD')
    console.log(response)
  })()
}

module.exports = teletramRates