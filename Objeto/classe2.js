class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // no caso, pai tem avo como prototipo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // no caso a super classe de pai, é avo, no caso puxando o sobrenome do avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)