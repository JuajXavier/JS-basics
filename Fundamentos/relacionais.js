// relacional sempre é true or false

console.log('01)', '1' == 1) // true no js porque o 1 é igual a 1
console.log('02)', '1' === 1) // false porque apesar de 1 = 1, o primeiro é string e o segundo numero mesmo.
// tbm tem "diferente" e "estritamente diferente", sendo != e !== respec
// >, <, >=, <=

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // == tbm dá falso
//se tiver getTime dá true porque tá comparando o number, tanto == e ===
// undefined == null true, undefined === null, false.
// é melhor sempre usar ===, pra levar em consideração valor E tipo.