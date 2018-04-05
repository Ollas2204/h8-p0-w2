//1. Menyusun Barisan Bintang
// var rows1 = 5
// for (var i = 0; i < rows1; i++) {
//   console.log( '*');
// }

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var result = ''
for (var j = 0; j <= 5; j++) {
  result += '*';
}
 for (var j = 0; j <= 5; j++) {
   console.log(result);
 }

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var result = ''
for (var j = 0; j <= 5; j++) {
  result += '*';
  console.log(result);
}
