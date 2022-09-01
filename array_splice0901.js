const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months);
// 시작부분은 1번 삭제할 count는 0 추가할 아이템 Feb
months.splice(4, 1, "may");
console.log(months);
//시작부분은 4번 삭제할것은 June 추가할 아이템은 May
