function pairUp(students) {

  let splitted = []
  let result = []
  let danHilang = []

  for (let i = 0; i < students.length; i++) { // akses index value parameter
    danHilang = students[i].split(' dan ')// hilangin kata 'dan' dari value parameter
    splitted.push(danHilang)//'dan' hilang push ke array


  }

  for (let i = 0; i < splitted.length; i++) {
  //splitted.length untuk dapet panjang karakter value parameter yg sudah tanpa 'dan' agar bisa akses array
    for (var j = 0; j < splitted[i].length; j++) {
//splitted[i].length untuk dapet panjang karakter yg sudah jadi array
      if (splitted[i][j] != 'Instruktur') {
// hasil looping panjang array di cek satu-satu cari kata yang bukan 'Instruktur'
        result.push(splitted[i][j]);
// yg bukan 'Instruktur' di push ke array supaya jadi 1 array
      }

   }

  }

  return result

}


// TEST CASES
console.log(pairUp(['Budi dan Badu'])); // ['Budi', 'Badu']
console.log(pairUp(['Budi dan Instruktur'])); // ['Budi']
console.log(pairUp(['Budi dan Badu', 'Indra dan Indri'])); // ['Budi', 'Badu', 'Indra', 'Indri']
console.log(pairUp(['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur'])); // ['Budi', 'Badu', 'Indra', 'Indri', 'James']
console.log(pairUp([])); // []
