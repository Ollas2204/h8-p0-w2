// function loveMeNot(decisions) {
//   var love = 0
//   var noLove = 0
//   if (decisions.length == []){
//     return "GALAU"
//   }
//
// for (var i = 0; i < decisions.length; i++) {
//   if (decisions[i] === true) {
//     love+=1
//   }
//   else if (decisions[i] === false) {
//     noLove+=1
//   }
// }
// if (love === noLove) {
//   return "GALAU"
// }
// if (love >= noLove) {
//   return "HE LOVES ME!"
// }
// else {
//   return "HE DOES NOT LOVE ME :("
// }
// if (decisions[i] === false) {
//   return "HE DOES NOT LOVE ME :("
// }
// }
//
// // TEST CASES
// console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
// console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
// console.log(loveMeNot([true, false])); // "GALAU"
// console.log(loveMeNot([])); // "GALAU"
// console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("

/**
Array Merge
-----------
Mishima Zaibatsu mempunyai 2 mata-mata untuk mencari nama orang yang berpotensi untuk mengalahkan
Heihachi Mishima dan mengambil alih perusahaan miliknya. 2 mata-mata ini mengerjakan tugasnya
dengan baik, tetapi ada saatnya kedua data yang diberikan memiliki duplikat (nama yang sama).
Implementasikan function arrayMerge untuk menggabungkan 2 data yang diberikan kepada
Mishima Zaibatsu dan jangan sampai terdapat nama yang sama di data yang sudah tergabung tadi.
Contoh:
- input: ['kazuya', 'jin', 'lee'], ['kazuya', 'feng']
  output: ['kazuya', 'jin', 'lee', 'feng']
- input: ['lee', 'jin'], ['kazuya', 'panda']
  output: ['lee', 'jin', 'kazuya', 'panda']


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .concat()
  - .indexOf() / .lastIndexOf() / .includes()
  - .copyWithin()
*/
// function reverseAll (arr) {
//   // Code disini
//   var save = []
// for (var i = arr.length -1; i >= 0; i--) {
//
//     var words = ''
//     for (var j = arr[i].length -1; j >= 0; j--) {
//       words += arr[i][j]
//
//     }
//     save.push(words)
//   }
// return save
// }
//
// console.log(reverseAll(['dimitri', 'sergei', 'alexei']));
// // ['iexela', 'iegres', 'irtimid']
//
// console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']));
// // [ 'ollem', 'raen', 'teilwal', 'arik' ]
//
// console.log(reverseAll([]));
// // []


function arrayMerge (firstData, secondData) {
  // Code disini
  var firstData = firstData
  var secondData = secondData

  firstData.push.apply(firstData, secondData)

  return firstData

}
// var x = [1, 2, 3], y = [4, 5, 6];
// >>> x.push.apply(x, y) // or Array.prototype.push.apply(x, y)
// >>> x
// [1, 2, 3, 4, 5, 6]
//

// Test cases

console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// ['sergei', 'jin', 'steve', 'bryan']

console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
// ['alisa', 'yoshimitsu', 'devil jin', 'law']

console.log(arrayMerge([], ['devil jin', 'sergei']));
// ['devil jin', 'sergei']

console.log(arrayMerge(['hwoarang'], []));
// ['hwoarang']

console.log(arrayMerge([], []));
// []
