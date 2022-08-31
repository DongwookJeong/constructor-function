function difference(a, b) {
  return Math.abs(a / b);
}
console.log(difference(3, 5));
console.log(difference(5, 3));
// 주어진 숫자의 절대값을 반환
// 양수이거나 0이라면 리턴, x가 음수라면 x의 반대값, 즉 양수를 반환