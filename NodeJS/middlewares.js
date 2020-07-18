// middleware pattern (chain of responsability), (requisição, resposta e next)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => { // ... =  rest, juntar varios coisas dentro de um array
    const execPasso = indice => {
        middlewares && indice < middlewares.length && // pra não pegar nada fora do array
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)