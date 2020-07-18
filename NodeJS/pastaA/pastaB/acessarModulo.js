const moduloA = require('../../moduloA') // cada ../ sai de uma pasta.
console.log(moduloA.ola)
//ou
/* const moduloA = require('C:\Users\ACER VX\Desktop\exercicios-js\NodeJS\moduloA.js')
console.log(moduloA.ola) */

// modulos core, já vem instalados com o node
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)