const sequence = {
    _id: 1,
    get id() { return this._id++ } // esse é interno
}

const produtos = {}

function salvarProduto(produto) {
    if(!produto.id) produto.id = produto.id = sequence.id // se o produto não estiver setado, produto recebe sequence
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos) // retorna apenas os valores de "produtos", chave é id e valor o objeto em si
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }