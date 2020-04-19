# Source code of _utils.r3js.com_

Basic microservices useful for many frontend developments:

## https://utils.r3js.com/geo

```json 
{
  "geo": {
    "range": [
      1395874816,
      1395875071
    ],
    "country": "ES",
    "region": "AR",
    "eu": "1",
    "timezone": "Europe/Madrid",
    "city": "Teruel",
    "ll": [
      40.3456,
      -1.1065
    ],
    "metro": 0,
    "area": 100,
    "currency": {
      "code": "EUR",
      "title": "Euro",
      "symbol": "€",
      "native": "€",
      "thousands_sep": " ",
      "decimal_sep": ",",
      "symbol_left": false,
      "space_between": true,
      "exp": 2,
      "min_amount": "91",
      "max_amount": "919540"
    }
  },
  "ip": "83.51.92.177"
}
```

## https://utils.r3js.com/geo?baseCurrency=CAD

With param `baseCurrency` the response includes the `exchangeRate` to local currency 

```json
{
  "geo": {
    "range": [
      1395874816,
      1395875071
    ],
    "country": "ES",
    "region": "AR",
    "eu": "1",
    "timezone": "Europe/Madrid",
    "city": "Teruel",
    "ll": [
      40.3456,
      -1.1065
    ],
    "metro": 0,
    "area": 100,
    "currency": {
      "code": "EUR",
      "title": "Euro",
      "symbol": "€",
      "native": "€",
      "thousands_sep": " ",
      "decimal_sep": ",",
      "symbol_left": false,
      "space_between": true,
      "exp": 2,
      "min_amount": "91",
      "max_amount": "919540",
      "exchangeRate": 0.65
    }
  },
  "ip": "83.51.92.177"
}
```
