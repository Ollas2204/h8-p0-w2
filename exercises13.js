function xo(str) {
var countX = 0 ;
var countO = 0 ;
 for( var index= 0; index <= str.length-1; index++){
  if(str[index] === 'x') {
     countX++
  }
  else if(str[index] === 'o') {
      countO++
  }
}
if (countX === countO) {
      console.log(true);
    }
    else {
      console.log(false);
    }

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
