let random3 = [];
for (i = 0; i < 3; i++) {
  let randomNum1 = Math.floor(Math.random() * 19 + 1);
  if (random3.indexOf(randomNum1) === -1) {
    random3.push(randomNum1);
  } else {
    i--;
  }
}
console.log(random3);

function inputSet(first, second, third) {
  this.first = first;
  this.second = second;
  this.third = third;
}
let inputData = new inputSet(random3[0], random3[1], random3[2]);
console.log(inputData);
// for (let i = 0; i < random3.length; i++) {}
let average = (random3[0] + random3[1] + random3[2]) / 3;
console.log(average);

let averageKing = [];
if (average < 10) {
  averageKing = "under";
} else {
  averageKing = "over";
}
console.log(averageKing);

random3.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
});
// console.log(random3);
let midKing = random3;
console.log(midKing[1]);

// if(random3[0]<random3[1])
// let averageKing = average[0] / 3;
// console.log(averageKing);
// if(average(index) <)
// let randomNum2 = randomNum1 * 3
// 4트 성공!!!!!!!!!!!!

// const twenty = Array(20).fill().map((v, i) => i + 1);
// console.log(twenty);
// 3트 실패

// let exid = [];
// const twenty = Array(20).fill().map((v, i) => i + 1);
// console.log(twenty);
// for twentyRandom(){
//   const randomNum = Math.floor(Math.random()*20);
//   exid.push(randomNum)
// }
// console.log(exid)
// 2트 실패

// function randomNum(min, max) {
//   let randomNum = Math.floor(math.random() * (max - min + 1)) + min;
//   return random;
//   randomNum(1, 20);
// }
// console.log(randomNum);
// // 실패

// const twenty = Array(20).fill().map((v, i) => i + 1);
// console.log(twenty)
// // 범위 설정
