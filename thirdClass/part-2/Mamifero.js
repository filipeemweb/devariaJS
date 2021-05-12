const Animal = require('./Animal');

class Mamifero extends Animal {
    constructor(nome, qtdMamas) {
        super(nome);
        this.qtdMamas = qtdMamas;
    }
}

module.exports = Mamifero;