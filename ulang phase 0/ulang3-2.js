function balikString(kata) {
  var save = ''
for (var i = kata.length-1 ; i >= 0 ; i--) {
  save = save + kata[i]
}
return save
}
console.log(balikString("hello world!"))
