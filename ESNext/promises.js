// assíncrono, pode dar sucesso ou erro
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { // função resolve vai ser chamada quando a promise for sucesso, ou reject quando da erro
        setTimeout(() => {
            resolve(frase)
           /* reject(frase) */ // em caso de erro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?')) // chamada quando resolve o objeto que vc deseja que seja passado pra função then
    .then(outraFrase => console.log(outraFrase)) // then pode usar quantas vezes quiser
    .catch(e => console.log(e)) // pra tratar um erro em promise, usar .catch

