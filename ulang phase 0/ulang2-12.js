function konversiMenit(menit) {
var jam = menit / 60
var bulat = Math.floor(jam)
var minuts = menit % 60
if (minuts <= 5) {
  return bulat + ':0' + minuts
}
else {
  return  bulat + ':' + minuts
}
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
