// pr nome/valor
const saudacao = 'Opa' // contexto léxico 1 = contexto no qual sua variavel foi definida dentro do codigo

function exec() {
    const saudacao = 'Faaala' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome ou chave/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)