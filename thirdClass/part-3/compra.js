//importanto o enum
const Boleto = require('./Boleto');
const Pix = require('./Pix');
const { BOLETO } = require('./TipoPagamento');
const { PIX } = require('./TipoPagamento');
const TipoPagamento = require('./TipoPagamento');

//receber a forma de pagamento e o valor
const formaDePagamento = process.argv[2];
const valor = process.argv[3];

//validar os parametros de entrada
if(!formaDePagamento) {
    console.log("Forma de pagamento não informada");
    return;
}

if(!valor) {
    console.log("Valor não informado");
    return;
}

let objetoFormaPagamento;

const eBoleto = formaDePagamento.toLowerCase() === TipoPagamento.BOLETO.toLowerCase();
const ePix = formaDePagamento.toLowerCase() === TipoPagamento.PIX.toLowerCase();
if(eBoleto) {
    objetoFormaPagamento = new Boleto();
} else if (ePix) {
    objetoFormaPagamento = new Pix();
} else {
    console.log(`A forma de pagamento ${formaDePagamento} não é valida`);
    return;
}

//identificar a forma de pagamento
if(!eBoleto && !ePix) {
    console.log(`Forma de pagamento ${formaDePagamento} não é valida.`);
    return;
}

//efetuar pagamento
objetoFormaPagamento.efetuarPagamento(valor);