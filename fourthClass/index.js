// Configurar o express
// Criar um controller para receber requisição
// Devolver para o usuario os dados dele via JSON
// Criar o Swagger da nossa API

const App = require('./src/App');

const api = new App();
api.start();