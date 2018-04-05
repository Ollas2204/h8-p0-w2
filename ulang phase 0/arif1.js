// var kali = 1
// function multiplication(num, nam){
// kali = num*nam
// return kali
// }
//console.log(multiplication(4,5));
// var gabungKata = ''
// function mergeStrings(str1, str2, str3, str4) {
//  gabungKata = str1 + '-' + str2 + '-' + str3 + '-' +str4
//  return gabungKata
// }
// console.log(mergeStrings('hello','world','nice','day')); //hello-world-nice-day
// console.log(mergeStrings('welcome','to','javascript','!'));

// function powerMe(num1,num2) {
//   var simpan = 0
// if (simpan === num2) {
//   return 1
// }
// else {
// return num1 * powerMe(num1, num2-1)
// }
// }
// console.log(powerMe(2, 3));
// console.log(powerMe(2, 4));

function drawLadder(row) {

var simpan =''
var arr=[]
  for (var i = 0; i < row; i++) {
    if (i % 2 !== 0) {
      simpan =  'x'
    }
    else {
      simpan= 'o'
    }
    var save = ''
    for (var j = 0; j <= i ; j++) {
      save += simpan
    }
    arr.push(save)
  }
console.log(arr.join('\n'))
}
console.log(drawLadder(6))
console.log(drawLadder(3))
