//btn클릭 시 date 날짜를 timestamp로 변환

let timestamp = 0;
const res = document.getElementById("authors");
let day = document.getElementById("date");
document.getElementById("btn").addEventListener("click", (e) => {
  timestamp = parseInt(new Date(day.value).getTime() / 1000);
  console.log(timestamp);
  fetch(
    "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=KRW&ts=" +
      `${timestamp}`
  )
    .then((r) => r.json())
    .then((j) => {
      const btcprice = Math.floor(j.BTC.KRW);
      let li = document.createElement("li");
      li.innerHTML = btcprice;
      res.appendChild(li);
      fetch(
        "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=KRW"
      )
        .then((r) => r.json())
        .then((j) => {
          let input = document.getElementById("investment");
          input.value;
        });
    });
});
//순이익/투자 비용 x 100
