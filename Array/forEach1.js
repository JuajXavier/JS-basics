const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array) { // indice é SEMPRE segundo parametro
    console.log(`${indice + 1}) ${nome}`)
    console.log(array) // função for each tem 3 parametros, nome, indice e array, sempre.
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)