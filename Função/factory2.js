function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}


console.log(criarProduto('PC', 2000.00))
console.log(criarProduto('Xablau', 1000.00))