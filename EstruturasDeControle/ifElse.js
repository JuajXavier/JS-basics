const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado (10)
imprimirResultado (4)
imprimirResultado ('Epa!') // como pede numero, string conta como falso e no JS imprime o "reprovado"

