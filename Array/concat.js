const filhas = ['Ana', 'Maria']
const filhos = ['Pedro','João']
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos, filhos, filhas)

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]])) // 3 parametros, 3 arrays, 1 solto