const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // vai agir com o bloco mais perto dele, seja for, while, etc.
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // dá break no selecionado, e ai continua o resto. Desvio de fluxo
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo // nomeando onde quero dar o break
        console.log(`Par = ${a},${b}`)
    }
}

console.log('ah peão')