//1. Melakukan Looping Menggunakan While
// var loopingPertama = 2
// while (loopingPertama <= 20) {
// console.log(loopingPertama + ' - I love coding');
// loopingPertama +=2
// };
//
// //=============================
// var loopingKedua = 20
// while (loopingKedua >= 2) {
// console.log(loopingKedua + ' - I will become fullstack developer');
// loopingKedua -=2
// }
// LOOPING PERTAMA
// 2 - I love coding
// 4 - I love coding
// 6 - I love coding
// 8 - I love coding
// 10 - I love coding
// 12 - I love coding
// 14 - I love coding
// 16 - I love coding
// 18 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 18 - I will become fullstack developer
// 16 - I will become fullstack developer
// 14 - I will become fullstack developer
// 12 - I will become fullstack developer
// 10 - I will become fullstack developer
// 8 - I will become fullstack developer
// 6 - I will become fullstack developer
// 4 - I will become fullstack developer
// 2 - I will become fullstack developer

// Melakukan Looping Menggunakan For
// var loopingPertama = 20
// for (var i = 1; i <= loopingPertama; i++) {
//   console.log(i + ' - I love coding');
// }
//
// var loopingKedua = 1
// for (var i = 20; i >= loopingKedua; i--) {
//   console.log(i + ' - I will become fullstack developer');
// }
// LOOPING PERTAMA
// 1 - I love coding
// 2 - I love coding
// 3 - I love coding
// 4 - I love coding
// 5 - I love coding
// 6 - I love coding
// 7 - I love coding
// 8 - I love coding
// 9 - I love coding
// 10 - I love coding
// 11 - I love coding
// 12 - I love coding
// 13 - I love coding
// 14 - I love coding
// 15 - I love coding
// 16 - I love coding
// 17 - I love coding
// 18 - I love coding
// 19 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 19 - I will become fullstack developer
// 18 - I will become fullstack developer
// 17 - I will become fullstack developer
// 16 - I will become fullstack developer
// 15 - I will become fullstack developer
// 14 - I will become fullstack developer
// 13 - I will become fullstack developer
// 12 - I will become fullstack developer
// 11 - I will become fullstack developer
// 10 - I will become fullstack developer
// 9 - I will become fullstack developer
// 8 - I will become fullstack developer
// 7 - I will become fullstack developer
// 6 - I will become fullstack developer
// 5 - I will become fullstack developer
// 4 - I will become fullstack developer
// 3 - I will become fullstack developer
// 2 - I will become fullstack developer
// 1 - I will become fullstack developer


// 3. Angka Ganjil dan Genap
// var kelipatan = 100
// for (var i = 1; i <= kelipatan; i++) {
//   if (i % 2 !== 0) {
//     console.log( i + ' Ganjil');
//   }
//   else {
//     console.log( i + ' Genap');
//   }
// }

var kelipatan3 = 100
for (var i = 1; i <= kelipatan3; i+=2) {
  if (i % 3 === 0) {
    console.log( i + ' - Kelipatan 3');
  }
}

// var kelipatan6 = 100
// for (var j = 1; j <= kelipatan6; j+=5) {
//   if (j % 6 === 0) {
//     console.log( j + ' - Kelipatan 6');
//   }
// }
//
// var kelipatan10 = 100
// for (var k = 1; k <= kelipatan10; k+=9) {
//   if (k % 10 === 0) {
//     console.log( k + ' - Kelipatan 10');
//   }
// }


// //contoh - ganjil genap
// //counter sekarang = 1,
// //output
// "GANJIL"
// //counter sekarang = 2,
// //output
// "GENAP"
// // dan seterusnya :)
//
// //contoh - untuk pertambahan counter 2
// //counter sekarang = 1,
// //output
// ""
// //counter sekarang = 3,
// //output
// "3 KELIPATAN 3"
// // dan seterusnya :)
//
// //contoh - untuk pertambahan counter 5
// //counter sekarang = 1,
// //output
// ""
// //counter sekarang = 6,
// //output
// "6 KELIPATAN 6"
// // dan seterusnya :)
//
// //contoh - untuk pertambahan counter 9
// //counter sekarang = 1,
// //output
// ""
// //counter sekarang = 10,
// //output
// "10 KELIPATAN 10"
// dan seterusnya :)
