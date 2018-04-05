function hitungJumlahKata(kalimat) {
 var array = []
 var save = ''
 for (var i = 0; i < kalimat.length; i++) {
   save += kalimat[i]
 if (i !== kalimat.length -1) {

 if (kalimat[i] === ' ') {
     array.push(save)
     save = ''
     }
   }
 else {
   array.push(save)
 }

}
 return array.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
