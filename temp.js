//btn클릭 시 date 날짜를 timestamp로 변환

const res = document.getElementById("authors");
let day = document.getElementById("date");

document.getElementById("btn").addEventListener("click", async () => {
  try {
    const timestamp = parseInt(new Date(day.value).getTime() / 1000);

    //과거 가격
    const btcResponse = await fetch(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=KRW&ts=" +
        `${timestamp}`
    );
    //과거 가격 불러오기 Error 발생
    if (!btcResponse.ok) {
      throw new Error("Failed to fetch Bitcoin price");
    }
    const btcData = await btcResponse.json();
    const btcprice = Math.floor(btcData.BTC.KRW);

    //현재 가격
    const currentPriceResponse = await fetch(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=KRW"
    );
    //현재 가격 불러오기 Error 발생
    if (!currentPriceResponse.ok) {
      throw new Error("Failed to fetch current Bitcoin price");
    }

    const currentPriceData = await currentPriceResponse.json();
    const currentPrice = Math.floor(currentPriceData.BTC.KRW);
    const profitPercentage =
      Math.floor(((currentPrice - btcprice) / btcprice) * 100) / 100;
    const investmentInput = document.getElementById("investment");
    const result = investmentInput.value * (1 + profitPercentage);

    //이번 결과 초기화
    while (res.firstChild) {
      res.removeChild(res.firstChild);
    }

    const resultDiv = document.createElement("div");
    resultDiv.innerText = result;
    res.appendChild(resultDiv);
  } catch (error) {
    console.error("An error occured: ", error);
  }
});
