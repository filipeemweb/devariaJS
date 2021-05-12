const readline = require('readline');
const Produto = require("./Produto");

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produtosMercado = [
    new Produto("feijão", 0.50),
    new Produto("arroz", 10.5),
    new Produto("melancia", 2),
    new Produto("suco", 10),
    new Produto("alface", 1.5)
];

const validarLista = (listaMercado) => {
    if (!listaMercado) {
        throw Error("A lista não pode estar vazia");
    }

    const itensDesejados = listaMercado.split(",");
    const itensIvalidos = itensDesejados.filter(item => !item.trim()).length;

    if(itensDesejados > 0) {
        throw Error(`Tem ${itensIvalidos} itens invalidos na sua lista`);
    }

    return itensDesejados;
}

const obterDisponibilidade = (lista) => {
    const produtosDisponiveis = [];
    const produtosNaoDisponiveis = [];
    
    for (const item of lista) {
        const itemFormatado = item.trim().toLowerCase();
        const produto = produtosMercado.find(produtoMercado => produtoMercado.nome === itemFormatado);
        
        
        if(produto) {
            produtosDisponiveis.push(produto);
        } else {
            produtosNaoDisponiveis.push(itemFormatado);
        }
    }

    return {
        produtosDisponiveis,
        produtosNaoDisponiveis
    }
}

leitor.question("Digite a lista de produtos desejados separados por virgula:\n", (listaMercado) => {
    try {
        const listaValida = validarLista(listaMercado);
        const disponibilidade = obterDisponibilidade(listaValida); 

        console.log(`Este produto está disponível: `, disponibilidade.produtosDisponiveis);
        console.log(`Este produto não está disponível: `, disponibilidade.produtosNaoDisponiveis);

        const produtosMercadoOrdenados = produtosMercado.sort(a => a);
        
        console.log(`Tambem temos estes produtos disponiveis: `, produtosMercadoOrdenados);
    } catch (e) {
        console.log(`Erro ao processar a lista: ${e.message}`);
    }
    finally {
        leitor.close();
    }
});