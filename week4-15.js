
function changeVocals (str) {

  let output = '';
  const vocals = 'aiueo';

  for (let i = 0; i < str.length; i++) {

    if (vocals.indexOf(str[i].toLowerCase()) !== -1) {

      output += String.fromCharCode(str[i].charCodeAt(str[i]) + 1);

    } else {

      output += str[i];

    }

  }

  return output;

}

function reverseWord (str) {
  return str.split('').reverse().join('');
}

function setLowerUpperCase (str) {
  let output = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === str[i]) {
      output += str[i].toUpperCase();
    } else {
      output += str[i].toLowerCase();
    }
  }
  return output;
}

function removeSpaces (str) {
  return str.split(' ').join('');
}

function passwordGenerator (name) {

  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter!';
  }

  const vokantal = changeVocals(name);
  const reversedVokantal = reverseWord(vokantal);
  const upperToLowerReversed = setLowerUpperCase(reversedVokantal);
  const hasil = removeSpaces(upperToLowerReversed);

  return hasil;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
