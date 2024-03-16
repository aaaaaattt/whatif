const apiKey =
  "bd4f605df59891a7e298a7227117404b2215dba9008a7b6e24206b6aadd5b038";

async function fetchCoinList() {
  try {
    const response = await fetch(
      "https://min-api.cryptocompare.com/data/all/coinlist"
    );
    const data = await response.json();
    return data.Data;
  } catch (err) {
    console.error("Error fetchng coin list:", error);
    return null;
  }
}

fetchCoinList().then((coinList) => {
  if (coinList) {
    let CoinList = Object.keys(coinList);

    let selectElement = document.getElementById("coinlist");

    CoinList.forEach((coinName) => {
      console.log(coinName, selectElement);
      let optionElement = document.createElement("option");
      optionElement.text = coinName;
      selectElement.appendChild(optionElement);
    });
  } else {
    console.log("Failed to fetch coin list.");
  }
});

fetchCoinList();
