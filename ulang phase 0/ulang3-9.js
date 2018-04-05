function cariMean(arr) {

  if (arr.indexOf(1)) {
    return false
  }else {
    return true
  }

  // return arr.indexOf(1) !== -1 ? true : false
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

// var hasilBagi = 0
// var pembagian = 0
//
// // you can only write your code here!
// for (var i = 0; i < arr.length ; i++) {
//   pembagian += arr[i]
// }
// hasilBagi= pembagian/arr.length
// var final = Math.round(hasilBagi)
// return final
