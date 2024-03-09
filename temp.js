let coin = "btc";

fetch(
  "https://min-api.cryptocompare.com/data/price?fsym=" +
    `${coin}` +
    "&tsyms=USD"
)
  .then((r) => r.json())
  .then((j) => console.log(j));
