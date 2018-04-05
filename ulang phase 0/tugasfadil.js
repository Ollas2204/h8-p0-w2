function faktor(num) {
  var arrResult = []
  var ans = []
  var ganjil = 0
  for (var i = num; i > 0; i--) {
    if (num % i === 0) {
      ans.push(i);
    }
  }

  arrResult.push(ans)

  for (var i = 0; i < ans.length; i++) {
    if (ans[i] % 2 !== 0) {
      ganjil += ans[i]
    }
  }

  arrResult.push(ganjil)

  //return arrResult
  return [ans,ganjil]

    //return faktorArr;
}

console.log(faktor(6));      // [6, 3, 2, 1]
console.log(faktor(17));     // [17, 1]
console.log(faktor(16));     // [16, 8, 4, 2, 1]
console.log(faktor(30));     // [30, 15, 10, 6, 5, 3, 2, 1]
console.log(faktor(35));     // [35, 7, 5, 1]
