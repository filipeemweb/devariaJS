const Animal = require('./Animal');

class Peixe extends Animal {
    constructor(nome, qtdNadadeira) {
        super(nome);
        this.qtdNadadeira = qtdNadadeira;
    }
}

module.exports = Peixe;