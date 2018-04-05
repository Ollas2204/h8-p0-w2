function isX (letter) {
  var x = 0
  for (var i = 0; i < letter.length; i++) {
    if (letter[i] === 'x' || letter[i] === 'X') {
      x++
    }
  }
  return x
}

function isY (letter) {
  var y = 0
  for (var j = 0; j < letter.length; j++) {
    if (letter[j] === 'y' || letter[j] === 'Y') {
      y++
    }
  }
  return y;
}

function isZ (letter) {
var z = 0
for (var k = 0; k < letter.length; k++) {
  if (letter[k] === 'z' || letter[k] === 'Z') {
    z++
  }
}
return z;
}

function virusCheck (str) {
  var x = isX(str)
  var y = isY(str)
  var z = isZ(str)

  return x+y+z ;
}

console.log(virusCheck('qlD4MZax0raQqew')); // 2 viruses detected
console.log(virusCheck('HH0NBP1zRa')); // 1 virus detected
console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy')); // 4 viruses detected
console.log(virusCheck('AIn4Ks05bBaa')); // No virus detected
console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
console.log(virusCheck('')); // No virus detected


 
