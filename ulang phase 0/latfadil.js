function statistik(kata, arr) {
  var min1 = arr[0]
  var max1 = 0

  for (var i = 0; i < arr.length; i++) {

    if (min1 > arr[i]) {
      min1 = arr[i]
    }

    if (max1 < arr[i]){
      max1 = arr[i]
    }

  }
  if (kata === 'min') {
    return min1
  }
     return max1
}

console.log(statistik('min', [1, 1, 1]));               // 1
console.log(statistik('max', [4]));                     // 4
console.log(statistik('min', [1, 2, 5, 2, 2]));         // 1
console.log(statistik('max', [6, 2, 4, 10, 8, 2]));     // 10
console.log(statistik('min', [5, 11, 18, 6]));          // 5
