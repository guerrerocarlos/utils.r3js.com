'use strict';
var geoip = require('geoip-lite');
var countriesByAbbreviation = require("./currenciesByAbbreviation.json")

module.exports.geo = async event => {
  var geoData = geoip.lookup(event.requestContext.identity.sourceIp)
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(
      {
        geo: geoData,
        curr: geoData.country && countriesByAbbreviation[geoData.country],
        ip: event.requestContext.identity.sourceIp
      },
      null,
      2
    ),
  };
};
