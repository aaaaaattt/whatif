//btn클릭 시 date 날짜를 timestamp로 변환
const res = document.getElementById("authors");
let day = document.getElementById("date");

//가상 자산 이름 가져오기
let crypto = document.getElementById("coins");
document.getElementById("btn").addEventListener("click", async () => {
  try {
    const timestamp = parseInt(new Date(day.value).getTime() / 1000);
    //가상자산명
    let cryptoName = crypto.value;
    //과거 가격
    const btcResponse = await fetch(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=" +
        `${cryptoName}` +
        "&tsyms=USD&ts=" +
        `${timestamp}`
    );
    //과거 가격 불러오기 Error 발생
    if (!btcResponse.ok) {
      throw new Error("Failed to fetch Bitcoin price");
    }
    const btcData = await btcResponse.json();
    const btcprice = Math.floor(btcData[cryptoName]["USD"]);

    //현재 가격
    const currentPriceResponse = await fetch(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=" +
        `${cryptoName}` +
        "&tsyms=USD"
    );

    //현재 가격 불러오기 Error 발생
    if (!currentPriceResponse.ok) {
      throw new Error("Failed to fetch current Bitcoin price");
    }

    const currentPriceData = await currentPriceResponse.json();
    const currentPrice = Math.floor(currentPriceData[cryptoName]["USD"]);

    const profitPercentage =
      Math.floor(((currentPrice - btcprice) / btcprice) * 100) / 100;
    const investmentInput = document.getElementById("investment");
    const result = Math.floor(investmentInput.value * (1 + profitPercentage));

    //이번 결과 초기화
    while (res.firstChild) {
      res.removeChild(res.firstChild);
    }

    const resultDiv = document.createElement("div");
    let rate = ((result - investmentInput.value) / investmentInput.value) * 100;
    resultDiv.innerText =
      "그 날 투자했다면.. 지금은 " +
      result +
      "원(" +
      rate.toFixed(0) +
      "%) 입니다.";

    res.appendChild(resultDiv);
  } catch (error) {
    console.error("An error occured: ", error);
  }
});
