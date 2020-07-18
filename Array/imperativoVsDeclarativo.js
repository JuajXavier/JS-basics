const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]
 
// imperativo, como fazer
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// declarativo, o que fazer
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma) // aqui é mapeia só as notas no novo array, e agrega os valores em forma de soma; reduce pode agregar valores
console.log(total2 / alunos.length)

// select codigo, nome, email from clientes where ativo = 1, declarativo, o que quer > como fazer