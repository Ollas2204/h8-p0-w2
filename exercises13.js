function xo(str) {
  // you can only write your code here!
  
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true


var angka1 = 5;
var angka2= 5;
function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
  if (angka1 < angka2){
    return true;
  }
 else if (angka1 > angka2){
      return false;
  } else {
    return -1;
  }
}
console.log(bandingkanAngka(angka1, angka2));
