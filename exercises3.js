var nama = 'Mikael';
var peran = 'Penyihir';
if (nama==='')  {
console.log("nama harus diisi!");
}
 else if (peran==='') {
 console.log("Halo" + nama + ", Pilih peranmu untuk memulai game!");
 }
 else if(peran==='Ksatria') {
    console.log("Selamat datang di Dunia Proxytia,"+ nama);
 console.log("Halo Ksatria " + nama +", kamu dapat menyerang dengan senjatamu!");
  }
  else if(peran==='Tabib') {
    console.log("Selamat datang di Dunia Proxytia, "+ nama);
 console.log("Halo Tabib " + nama +", kamu akan membantu temanmu yang terluka")
  }
  else if(peran==='Penyihir') {
    console.log("Selamat datang di Dunia Proxytia, "+ nama);
 console.log("Halo Penyihir " + nama +" , ciptakan keajaiban yang membantu kemenanganmu!");
  }
