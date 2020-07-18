const fs = require('fs') // file ou find system, esse já vem instalado no node, caso nao fosse, teria no node modules

const caminho = __dirname + '/arquivo.json' // pesquisar sobre underline, nao saquei

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8') // se for arquivo grande, pode travar
// utf-8 encode usado pra escrever o codigo (vscode)
console.log(conteudo)

//assincrono..., aqui é callback, quando o arquivo tiver pronto, será disparado de volta
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// forma mais objetiva
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => { // __ representa o diretorio atual
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})