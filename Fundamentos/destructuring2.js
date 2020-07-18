const [a] = [10] // nesse caso é destructuring, não array. Do lado direito é array! (dps do =)
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // segundo colchete é array, ignorou o primeiro elemento e deu o segundo
console.log(nota)