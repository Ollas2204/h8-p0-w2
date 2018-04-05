
var name = 'olla'
 var age = 18
 var money = 300000
 var juice = 50000
 var anggur = 300000
 var transaksi = 0

if (name === '') {
console.log('Anda tidak boleh masuk!');
}
else {
  if (age < 17) {
    transaksi = juice
    console.log('Juice');
  }
  else {
    transaksi = anggur
    console.log('anggur');
  }
}
if (money >= transaksi) {
  console.log('Anda bisa pesan minum')
  var sisaUang = money - transaksi
  console.log(sisaUang);;
}
else {
  console.log('Uang tidak cukup. Anda harus pulang');
}




// Step 1. Jika name dari si pengunjung kosong, tampilkan di console "Anda tidak boleh masuk!" dan program selesai. Jika name tidak kosong, lanjut ke step ke 2.
// Step 2. Jika age dari si pengunjung dibawah 17 tahun, maka ia hanya boleh memesan juice. Jika age 17 tahun keatas, ia hanya boleh memesan susu.
// Step 3. Juice memiliki harga 50000, sedangkan susu memiliki harga 100000. Sesuai dengan pilihan minuman di step 2, maka pengunjung ini harus membayar sesuai harga minuman menggunakan. Jika money / uang yang ia miliki tidak mencukupi, maka tampilkan di console "Uang tidak cukup. Anda harus pulang.". Jika uang cukup, tampilkan "Anda bisa pesan minum. Sisa uang anda: [...]", dan ganti [...] dengan sisa uang yang telah dikurangi oleh harga minuman.
//
