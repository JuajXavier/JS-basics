// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa = { nome: 'Ana' } dá erro pois ja tem a const pessoa, ali deu certo porque foi pessoa.nome, alterou o nome, não a constante

Object.freeze(pessoa) // depois daqui, o objeto é congelado e não pode mais ser alterado

pessoa.nome = 'Maria'
console.log(pessoa.nome)

//outro exemplo

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
