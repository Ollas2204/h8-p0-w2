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
=======
var peran = '';
if (nama==='')  {
console.log("nama harus diisi!");
}
 else if (nama==='Mikael' && peran==='') {
 console.log("Halo Mikael, Pilih peranmu untuk memulai game!");
 }
 else if(nama==='' && peran==='Ksatria') {
    console.log("Selamat datang di Dunia Proxytia,"+ nama);

 console.log("Halo Ksatria + nama +", "kamu dapat menyerang dengan senjatamu!");
  }
  else if(nama==='' && peran==='Tabib') {
    console.log("Selamat datang di Dunia Proxytia", + nama);
 console.log("Halo Tabib + nama +", "kamu akan membantu temanmu yang terluka")
  }
  else if(nama==='' && peran==='Penyihir') {
    console.log("Selamat datang di Dunia Proxytia", + nama);
 console.log("Halo Penyihir + nama + ", "ciptakan keajaiban yang membantu kemenanganmu!");
>>>>>>> d4ab26c0110b1b8eb5dd95391979bf6adf5a65d2
  }
