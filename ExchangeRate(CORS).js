//CORS (Cross-Origin Resource Sharing) 정책에 위배되므로... 보류

// let er = 0;
// fetch(
//   "https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=mmyxVZmjXwSCE1Cq1DZdCZURByiverzg&searchdate=20180102&data=AP01"
// )
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // 성공적으로 JSON 데이터를 받았을 때 실행되는 코드
//     er = data[29]["kftc_bkpr"];
//     console.log(er);
//   })
//   .catch((error) => {
//     // 오류가 발생했을 때 실행되는 코드
//     console.error("Fetch error:", error);
//   });
