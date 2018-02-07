//Logic Challenge - Bandingkan Angka

var angka1 = 5;
var angka2= 5;
function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
  if (angka1 < angka2){
    return "true";
  }
 else if (angka1 > angka2){
      return "false";
  } else {
    return "-1";
  }
}
console.log(bandingkanAngka(angka1, angka2));
