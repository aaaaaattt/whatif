//btn클릭 시 date 날짜를 timestamp로 변환

let timestamp = 0;
const res = document.getElementById("authors");
let day = document.getElementById("date");
document.getElementById("btn").addEventListener("click", (e) => {
  timestamp = parseInt(new Date(day.value).getTime() / 1000);
  console.log(timestamp);
  fetch(
    "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=" +
      `${timestamp}`
  )
    .then((r) => r.json())
    .then((j) => {
      const btcprice = j.BTC.USD;
      let li = document.createElement("li");
      li.innerHTML = btcprice;
      res.appendChild(li);
      console.log(j);
      fetch(
        "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD"
      )
        .then((r) => r.json())
        .then((j) => {
          let input = document.getElementById("investment");
        });
    });
});

//순이익/투자 비용 x 100
//다행히 then 안에서 fetch로 다시 불러온 후 then을 사용하면 이전 then 안의 변수는 읽을 수 있다!
// 순이익을 어떻게 구해야 하는가 / 코인 갯수..?
