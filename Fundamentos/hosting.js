console.log('a =', a) //puxar um valor undefined quando não tem um definido.
var a = 2
console.log('a =', a) 

console.log('b =', b) //dá erro com let.
let b = 2
console.log('b =', b)

//exemplo
function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste ()
console.log('a =', a) 
