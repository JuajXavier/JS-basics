let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // ++num1 foi modificado antes de ser comparado, e num2 foi comparado DEPOIS de ser modificado.
console.log(++num1 === --num2) // esse dá falso!
console.log(num1 === num2)