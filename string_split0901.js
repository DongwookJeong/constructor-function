const str = "The quick brown fox jumps over the lazy dog.";
const words = str.split(" ");
console.log(words[3]);
console.log(str);
// words는 큰 따옴표 사이 공간이 필요

const chars = str.split("");
console.log(chars[8]);
// chars는 공간 필요없음

const strCopy = str.split();
console.log(strCopy);
// strCopy는 복사 문자열