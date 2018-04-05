function belowAverage(arr) {
  var hasil = 0
  var rataRata = 0
  var save = []
  for (var i = 0; i < arr.length; i++) {
    hasil += arr[i]
  }
  rataRata = hasil / arr.length
  for (var j = 0; j < arr.length ; j++) {
    if (rataRata > arr[j]) {
      save.push(arr[j])
    }
  }
  return save;
}

console.log(belowAverage([1, 2, 3, 4, 5])); // [1, 2]
console.log(belowAverage([4, 2, 5, 1]));    // [2, 1]
console.log(belowAverage([5, 5, 5]));       // []
console.log(belowAverage([10, 2, 3, 2]));   // [2, 3, 2]
