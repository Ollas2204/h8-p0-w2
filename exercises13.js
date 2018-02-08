function xo(str) {
var input = '' ;
var countX = 0 ;
var countO = 0 ;
 for( var index= 0; index <= input.length; index++)
   if(input[index]=== x) {
    countX++ = true
    else if (input[index]=== o){
      countO++ = false

    }
   }


}

// TEST CASES
console.log(xo('xoxoxo')); // true
