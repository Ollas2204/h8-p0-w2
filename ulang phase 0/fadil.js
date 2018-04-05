function vowel(str) {
  var result = 0
for (var i = 0; i < str.length; i++) {
  if (str[i] == 'a' ) {
    result ++
  }
  if (str[i] == 'i') {
    result ++
  }
  if (str[i] == 'u') {
    result ++
  }
  if (str[i] == 'e') {
    result ++
  }
  if (str[i] == 'o') {
    result ++
  }
}
return result
  }

console.log(vowel('hello world!')); // 3
console.log(vowel('aeiou'));        // 5
console.log(vowel('psst'));         // 0
console.log(vowel('yolo'));         // 2
