'use strict';
var geoip = require('geoip-lite');
var countriesByAbbreviation = require("./currenciesByAbbreviation.json")
var telegramRates = require("./telegram-rates")

module.exports.geo = async event => {
  process.env.LOG && console.log('EVENT', JSON.stringify(event, null, 2));

  var geoData = geoip.lookup(event.requestContext.identity.sourceIp)
  var clientCurrency = geoData.country && countriesByAbbreviation[geoData.country]

  if (clientCurrency) {
    geoData.currency = await telegramRates(clientCurrency, event.queryStringParameters && event.queryStringParameters.baseCurrency)
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(
      {
        geo: geoData,
        ip: event.requestContext.identity.sourceIp
      },
      null,
      2
    ),
  };
};
