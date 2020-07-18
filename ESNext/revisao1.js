// let e const
{
    var a = 2 // fora daqui vai ler o a porque ele tá em todos os escopos
    let b = 3 // fora daqui não vai ler o b porque o escopo dele é por blocos
    console.log(b)
}
console.log(a)

// Template string
const produto = 'Ipad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome} = { nome: 'Ana', idade: 9 }
console.log(i, nome)