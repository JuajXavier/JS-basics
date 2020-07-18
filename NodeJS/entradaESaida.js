const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala, anonimo!\n') // standart output = stdout, write é pra escrever no terminal/console
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { //entrada padrão // on(data) quando vc escreve algo e da enter
        const nome = data.toString().replace('\n', '')
        
        process.stdout.write(`Fala ${nome}!\n`)
        process.exit()
    }) 
}
