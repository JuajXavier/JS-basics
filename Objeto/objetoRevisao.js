// coleção dinamica de pares chave/valor
const produto = new Object // construtora
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Jr',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorDoSeguro: function() {
        // ...
    }
}

// carro.proprietario.endereco.numero = 1000
// carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
// se soltar os comentarios acima muda os valores
console.log(carro)