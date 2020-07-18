// não aceita repetição e não é indexado (não da pra pegar o indice, como array)
const times = new Set()
times.add('Vasco')
times.add('SP').add('Palmeiras').add('Corin')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)
console.log(nomeSet.size)