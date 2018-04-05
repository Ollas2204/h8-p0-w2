function lostNumbers(first, second, third) {
  var str = ''
  var arr = [first, second, third]
  arr.sort()
  //console.log(arr[arr.length-1]);
  for (var i = arr[0] ; i < arr[arr.length-1]; i++) {
    if(arr.indexOf(i)== -1) {
      str = str + i + ', ';
    }
  }
  if (str === '') {
    return 'TIDAK ADA YANG DITAMPILKAN CONSOLE'
  }
return str.slice(0,str.length-2);
}
console.log(lostNumbers(1, 5, 3));//2 //4
console.log(lostNumbers(4, 6, 2));//3 //5
console.log(lostNumbers(100, 108, 105));// 101,102,103,104,106,107
console.log(lostNumbers(6, 5, 3));//4
console.log(lostNumbers(3, 1, 2));// (TIDAK ADA YANG DITAMPILKAN CONSOLE)
