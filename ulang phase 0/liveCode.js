function separateThem(students) {
  // Code here
  let splitted = []
  let danHilang = []

  for (let i = 0; i < students.length; i++) { // akses index value parameter
    danHilang = students[i].split(' dan ')// hilangin kata 'dan' dari value parameter
    splitted.push(danHilang)//'dan' hilang push ke array


  }
  return splitted
}

// TEST CASES
console.log(separateThem(['Budi dan Badu'])); // ['Budi', 'Badu']
console.log(separateThem(['Budi dan Michael'])); // ['Budi', 'Michael']
console.log(separateThem(['Budi dan Badu', 'Indra dan Indri'])); // ['Budi', 'Badu', 'Indra', 'Indri']
console.log(separateThem(['Budi dan Badu', 'Indra dan Indri', 'James dan Rodhes'])); // ['Budi', 'Badu', 'Indra', 'Indri', 'James', 'Rhodes']
console.log(separateThem([])); // []
