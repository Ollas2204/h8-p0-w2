function exists (numbers, toFind) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === toFind) {
      return true
    }

  }
    return false


}

console.log(exists([10, 40, 20, 30], 20)); // true
console.log(exists([20, 30, 87], 10)); // false
console.log(exists([15, 11, 51, 79, 8], 51)); // true
console.log(exists([20, 43, 12, 20], 20)); // true
