const array1 = [1, 4, 9, 21];
const map1 = array1.map((x) => x * 2);
console.log(map1);
// 배열 전체 요소에 곱 2

let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt);
console.log(roots);
// sqrt 제곱근

let kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
let reformattedArray = kvArray.map(function (obj) {
  let rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});
console.log(reformattedArray);
// map을 활용해 배열 속 객체를 재구성하기

let doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(doubles);
// 기본 배열을 바꾸지 않고 새로운 배열로 생성


