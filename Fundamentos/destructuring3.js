function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //math.floor?
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
// ou
console.log(rand({ max: 50, min: 40 }))

console.log(rand({ min: 955 }))
console.log (rand({}))
console.log(rand()) // erro, não tem objeto