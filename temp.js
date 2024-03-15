//btn클릭 시 date 날짜를 timestamp로 변환

let timestamp = 0;
const res = document.getElementById("authors");
let day = document.getElementById("date");
document.getElementById("btn").addEventListener("click", (e) => {
  timestamp = parseInt(new Date(day.value).getTime() / 1000);
  // console.log(timestamp);
  fetch(
    "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=KRW&ts=" +
      `${timestamp}`
  )
    .then((r) => r.json())
    .then((j) => {
      //해당 날짜의 가격
      const btcprice = Math.floor(j.BTC.KRW);
      let li = document.createElement("li");
      li.innerHTML = btcprice;
      res.appendChild(li);
      fetch(
        "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=KRW"
      )
        .then((r) => r.json())
        .then((j) => {
          //현재 가격
          let won = Math.floor(j.BTC.KRW);
          console.log(won);
          //수익률
          let temp = Math.floor(((won - btcprice) / btcprice) * 100) / 100;
          console.log(temp);
          let result = temp; //예상 수익률
          let input = document.getElementById("investment");
          let result2 = input.value * (1 + result); //
          input.value = result2;
        });
    });
});
