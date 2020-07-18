// tagged templates - processa o template string dentro de uma função
function tag(partes, ...valores) {
    console.log(partes) // tudo o que não foi interpolado
    console.log(valores) // o que foi interpolado com $
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)