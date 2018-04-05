function pairUp(students) {
  // Code here
  var study = '';
  var arrResult = []
  if (students.length % 2 !== 0) {
    students.push('Instruktur')
  }
  for (var i = 0; i < students.length; i+=2) {
    study = students[i] + ' dan ' + students[i+1]
    arrResult.push(study)

  }
  return arrResult
}

// TEST CASES
console.log(pairUp(['Budi', 'gading'])); // ['Budi dan Badu']
console.log(pairUp(['Budi'])); // ['Budi dan Instruktur']
console.log(pairUp(['Budi', 'gading', 'Indra', 'Indri'])); // ['Budi dan Badu', 'Indra dan Indri']
console.log(pairUp(['Budi', 'gading', 'Indra', 'Indri', 'James'])); // ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
console.log(pairUp([])); // []
