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
        "&tsyms=KRW&ts=" +
        `${timestamp}`
    );

    //과거 가격 불러오기 Error 발생
    if (!btcResponse.ok) {
      throw new Error("Failed to fetch Bitcoin price");
    }
    const btcData = await btcResponse.json();
    console.log(btcData[cryptoName]["KRW"]);
    const btcprice = Math.floor(btcData[cryptoName]["KRW"]);
    console.log(btcprice);

    //현재 가격
    const currentPriceResponse = await fetch(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=" +
        `${cryptoName}` +
        "&tsyms=KRW"
    );

    //현재 가격 불러오기 Error 발생
    if (!currentPriceResponse.ok) {
      throw new Error("Failed to fetch current Bitcoin price");
    }

    const currentPriceData = await currentPriceResponse.json();
    const currentPrice = Math.floor(currentPriceData[cryptoName]["KRW"]);

    const profitPercentage =
      Math.floor(((currentPrice - btcprice) / btcprice) * 100) / 100;
    console.log(profitPercentage, "aaaa", btcprice, "aaaa", currentPrice);
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
