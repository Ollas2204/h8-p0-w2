var menit = 65;
function konversiMenit(menit) {
  // you can only write your code here!
  var jam = menit/60 ;
  var pembulatan = Math.floor(jam);
  var minute = menit % 60;

    var n = minute.toString();
      if( n < 10) {
        n = '0' + n;
      }

      return pembulatan + ':'+n;
}
var hasilKonversi = konversiMenit(menit);
 console.log(hasilKonversi)
