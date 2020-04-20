var handler = require("./handler")

var event = {
  requestContext: {
    identity: {
      sourceIp: '83.51.92.177'
    }
  },
  queryStringParameters: {
    baseCurrency: 'USD'
  }
}

async function main() {
  console.log(await handler.geo(event))
}

main()