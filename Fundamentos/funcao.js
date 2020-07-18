// função sem retorno
//função é um bloco de código 

function imprimirSome(a, b) {
    console.log(a + b)
}

imprimirSome(2, 3)

//função com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))