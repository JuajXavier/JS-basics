const schedule = require('node-schedule') // npm i node--schedule

const tarefa1 = schedule.scheduleJob('*/5 * 23 * * 2', function () { // terça feira, qualquer mes, qualquer dia do mes, 12h, qualquer minuto, de 5 em 5 segundos
    console.log('Executando Tarefa1!', new Date().getSeconds())
}) 

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000) // 20 segundos

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})