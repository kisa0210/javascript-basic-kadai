//年月日の取得
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() +1 ;
const day = date.getDate();


//年月日を出力する
console.log(year + '年', month + '月', day + '日');