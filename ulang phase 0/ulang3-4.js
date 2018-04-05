
  var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
 function dataHandling2(input) {
  input.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung')
  input.splice(4,1,'Pria','SMA Internasional Metro')
  console.log(input);

 var tgl = input[3].split('/')
 var tanggal = tgl[0]
 var bln = tgl[1]
 var tahun = tgl[2]
var bulan = Number(bln) ;
switch(bulan) {
  case 01: { bulan = ('Januari'); break; }
  case 02: { bulan = ('Februari'); break; }
  case 03: { bulan =('Maret'); break; }
  case 04: { bulan =('April'); break; }
  case 05: { bulan =('Mei'); break; }
  case 06: { bulan =('Juni'); break; }
  case 07: { bulan =('July'); break; }
  case 08: { bulan =('Agustus'); break; }
  case 09: { bulan =('September'); break; }
  case 10: { bulan =('Oktober'); break; }
  case 11: { bulan =('November'); break; }
  case 12: { bulan =('Desember'); break; }
  default: { console.log('Format Bulan Salah'); }
}
console.log('* ' + bulan);
console.log(tgl.join('-'));
console.log(tgl.sort(function(value1, value2) { return Number(value1) < Number(value2) }));
var nama = input[1].slice(0, 15)
console.log('* '+ nama);
}
dataHandling2(input)
//
//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 // * Mei
 // * [1989, 21, 05]
 // * 21-05-1989
 // * Roman Alamsyah
