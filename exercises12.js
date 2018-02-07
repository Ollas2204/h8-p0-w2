var menit = 60;
function konversiMenit(menit) {
  // you can only write your code here!
  var jam = menit/60 ;
  var pembulatan = Math.floor(jam);
  var minute = menit % 60;
  var numMinute = minute;
    var n = minute.toString();{
      if( n < 10)
        return pembulatan + ':'+'0' + n;
    }
}
var hasilKonversi = konversiMenit(menit);
 console.log(hasilKonversi)
