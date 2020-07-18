let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // 1 = verdadeiro
console.log(!isAtivo) // ! = negação (false), !! = cancela a negação, permanece o original (true)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![ ])

console.log('os falsos...')
console.log(!!0) // outros: '', null, NaN, undefined, isAtivo = false.

// || = ou