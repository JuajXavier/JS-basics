// quantidade indeterminada de repetições

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0 // daonde começa

while (opcao != -1) { // quando bate -1, fecha.
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')