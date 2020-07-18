console.log(this === global) // falso pois aponta pra module.exports
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis () {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // verdadeiro dentro de uma função

    this.perigo = '...'
    console.log(perigo)
}

logThis()