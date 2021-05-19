const express = require('express');
const swaggerUi = require('swagger-ui-express'); 
const swaggerFile = require('./swagger/swagger.json');
const ApiConstants = require('./enums/ApiConstants');
const UserController = require('./controllers/UserController');

// Configurar o express
class App {
    start() {
        this.setupExpress();
        this.loadControllers();
        this.startServer();
    }

    setupExpress() {
        // instancia do express
        this.express = express();

        // configura o swagger na API
        this.express.use(
            `${ApiConstants.BASE_PATH}/docs`, 
            swaggerUi.serve, 
            swaggerUi.setup(swaggerFile));

        // definindo middleware para imprimir cada requisição nova
        this.express.use((req, res, next) => {
            console.log(req.method, req.url);
            next();
        });
    }

    // carrega toda a lista de controller da aplicação
    loadControllers() {
        this.controllers = [
            new UserController(this.express)
        ];
    }

    // inicia a aplicação na porta 3001
    startServer() {
        const port = 3001;
        this.express.listen(port, () => {
            console.log('API está executando na porta', port);
        });
    }
}

module.exports = App;