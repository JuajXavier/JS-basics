const porta = 3003 // como selecionar x processo

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true })) // urlencode é função middleware

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => { // o parametro esta na requisiçao
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai ser convetido em JSON para web
})


app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai ser convetido em JSON para web
})


app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // vai ser convetido em JSON para web
})




/*app.get('/produtos', (req, res, next) => { // get faz uma requisição
    res.send({ nome: 'Notebook', preco: 123.45 }) // send envia uma resposta e já converte pra json
}) */ // aqui é o exemplo original ^

/* app.use((req, res, next) => { // outra forma de usar
    res.send({ nome: 'Notebook', preco: 123.45 }) */

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})