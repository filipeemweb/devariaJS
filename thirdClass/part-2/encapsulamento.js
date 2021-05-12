class Produto {
    #nome;
    #preco;
    #tipo;

    constructor(nome, preco) {
        this.#nome = nome;
        this.#preco = preco;
        this.#tipo = 'móvel';
    }

    get nome() {
        return this.#nome;
    }

    get preco() {
        return this.#preco * .75;
    }
}

const produto = new Produto("Monitor", 2500);
// produto.nome = "copo";
console.log(produto.preco);