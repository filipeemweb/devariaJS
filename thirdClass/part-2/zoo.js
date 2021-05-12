// importar as classes
const Ave = require('./Ave');
const Mamifero = require('./Mamifero');
const Peixe = require('./Peixe');
const Reptil = require('./Reptil');
const Animal = require('./Animal');

// receber o nome do animal
const nomeAnimal = process.argv[2];


if(!nomeAnimal) {
    console.log("Favor passar o nome do animal!");
    return;
}

// define a lista de animais que o programa espera
const listaAnimais = [
    new Mamifero("vaca", 4),
    new Reptil("cobra"),
    new Ave("gavião", true),
    new Peixe("tubarão", 2)
];

// identificar o animal digitado pelo usuario
const animalSelecionado = listaAnimais.find(animal => animal.nome.toLowerCase() === nomeAnimal.toLowerCase());

// validar se o animal foi encontrado
if(!animalSelecionado) {
    console.log("O animal não esta na nossa lista");
    return;
}

// identificar qual grupo o animal pertence
// exibir os dados genericos e exclusivos do animal.
if (animalSelecionado instanceof Mamifero) {
    console.log(`O animal encontrado e um mamífero com nome ${animalSelecionado.nome} e possui ${animalSelecionado.qtdMamas} de mamas.`);
} else if (animalSelecionado instanceof Reptil) {
    console.log(`O animal encontrado é um reptil com nome ${animalSelecionado.nome} e consegue controlar a temperatura do seu corpo: ${animalSelecionado.controlaTemperaturaCorpo}.`);
} else if (animalSelecionado instanceof Ave) {
    console.log(`O animal encontrado é uma ave com nome ${animalSelecionado.nome} e sabe voar: ${animalSelecionado.voa}.`);
} else if (animalSelecionado instanceof Peixe) {
    console.log(`O animal encontrado é um peixe com nome ${animalSelecionado.nome} e possui ${animalSelecionado.qtdNadadeira} nadadeiras.`);
} else {
    console.log(`O animal encontrado é um animal com nome ${animalSelecionado.nome}.`);
}

