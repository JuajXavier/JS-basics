const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //parenteses pra invocar a função factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorB.inc()
console.log(contadorA.valor, contadorB.valor) //aqui fica igual porque pra instancia unica ele cria cache

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) //aquid a diferente porque a factory cria uma nova instancia e depois soma
