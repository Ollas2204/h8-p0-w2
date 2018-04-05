function kaliTerusRekursif(angka) {
  // you can only write your code here!
  if (angka < 10) {

    return angka

  }

  return kaliTerusRekursif(+(String(angka)[0]) * kaliTerusRekursif(+(String(angka).slice(1))))

}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
