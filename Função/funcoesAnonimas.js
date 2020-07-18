const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, function (x, y) {
    return x- y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () { // pode por só "falar() {}, no js atual nao precisa por "function""
        console.log('Opa')
    }
}

pessoa.falar()