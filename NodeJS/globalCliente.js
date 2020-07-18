require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) //tem que dar object.freeze, se não ele muda o nome no escopo global.
