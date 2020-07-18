// usando promise hehe

// sem promise, aqui vai ser callback pra mostrar que é zoado acho
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
   return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
   })
}

/* let nomes = []
getTurma('A').then(alunos => {
    /* console.log(alunos[0].nome) 
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
}) */

//callback hell, nope nope nope

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
  /*  .then(x => console.log(x)) */
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))

getTurma('D').catch(e => console.log(e.message))