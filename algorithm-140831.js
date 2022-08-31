const studentList = [
  "강예훈",
  "김성현",
  "류주완",
  "마근원",
  "박종인",
  "박재형",
  "송형주",
  "양상희",
  "원두진",
  "유민호",
  "이상호",
  "이소영",
  "이은수",
  "정동욱",
  "정윤환",
  "정정원",
  "지영빈",
  "한용준",
  "황초영",
  "김근수",
  "김승현",
  "전형민",
  "정연주",
  "이아연",
  "최화연",
];
function kdt(name, age, address, tel) {
  if (
    typeof name === "string" &&
    typeof age === "number" &&
    typeof address === "string" &&
    typeof tel === "number"
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.tel = tel;
  }
  // kdt.name = studentList[i];
}
// console.log(kdt.name);
let myProject = new kdt(studentList[5], 27, "그린", 4);
console.log(myProject);
for (let i = 0; i < studentList.length; i++) {
  let student = new kdt(studentList[i], 27, "그린", 4);
  console.table(student);
  console.log(student);
}
// console.log(kdt);
// console.log(studentList);
// import haha from "./algorithm-140831";
// console.log(studentList);
// function gg(name){
//   this.id = name;
// }
// console.log(this);
// let student = new kdtStudent("강예훈");
// console.log(student);
// console.log(studentList.length);
// for (let i = 0; i < 26; i++) {
//   function kdtStudent(name) {
//     this.id = name;
//   }
//   let students = new studentList(i);
//   console.log(students);
// }
// console.log(haha);
