const escola = "Cod3r"

console.log(escola.charAt(4)) //charAt (character at, a quarta letra, no caso), começa no indice 0
console.log(escola.charCodeAt (3)) //valor dentro da tabela unicode (html?)
console.log(escola.indexOf("3"))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) //começando do zero, 3 caracteres

console.log("Escola ".concat(escola).concat("!")) //estudar concat, nao entendi bem
console.log("Escola " + escola + '!') //tbm serve como concat
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e')) //rejects (?) w = todos os caracteres, d = digitos, numeros.

console.log('Ana,Maria,Pedro'.split(','))