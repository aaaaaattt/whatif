(async function () {
  const btcrespon = await fetch(
    "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR"
  );
  const btdata = await btcrespon.json();
  // console.log(btdata.USD);
})();
