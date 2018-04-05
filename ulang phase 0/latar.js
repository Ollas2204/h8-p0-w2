// function removeDuplicate (numbers) {
//   var arr = []
//   // for (var i = 0; i < numbers.length; i++) {
//   //   for (var j = 0; j < array.length; j++) {
//   //     array[i]
//   //   }
//   //   if (numbers[i]!== ) {
//   //     arr.push(numbers[i])
//   //   }
//   // }
//
//     for (var i = 0; i < numbers.length; i++) {
//       let isFind = false;
//       for (var j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] === numbers[j]) isFind = true;
//     }
//
//     if (isFind === false) {
//       arr.push(numbers[i])
//     }
//
//
//   }
//
//   return arr
// }

console.log(removeDuplicate([10, 40, 20, 30, 20, 10, 45])); // [10, 40, 20, 30, 45]

function removeDuplicate(numbers) {
  const newArr = [];
  for (let j = 0; j < numbers.length; j++) {
    let isDuplicate = false;
    for (let i = 0; i < newArr.length; i++) {
      if (numbers[j] === newArr[i]) {
        isDuplicate = true;
      }
    }
    if (isDuplicate === false) {
      newArr.push(numbers[j]);
    }
  }

  return newArr;
}
