const moduloA = require('./moduloA') // ./ é pra achar o caminho
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia) // pra isso dar certo, tem que ser module.exports porque ta preenchendo o objeto vazio
console.log(moduloB.boaNoite())
console.log(moduloB)