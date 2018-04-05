function angkaPalindrome(num) {
// num++
// for (;true;) {
//   if (num == String(num).split('').reverse().join('')) {
//     return num
//   } else {
//     num++
//   }
// }
num++

if (num == String(num).split('').reverse().join('')) {
  return num
} else {
  return angkaPalindrome(num+=1)
}



}

// // TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
// console.log(an); // 12\\\\\\\\\
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
