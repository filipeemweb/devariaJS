const ApiConstants = require('../enums/ApiConstants');

// Controller base que servirá para todos os demais controllers
class BaseController {
    constructor(expressInstance) {
        if (!expressInstance) {
            throw new Error('A instância do express é obrigatória');
        }

        this.express = expressInstance;
        this.setupRoutes(ApiConstants.BASE_PATH);
    }

    // definição do metodo  abstrato para ser implementado nas classes filhas
    setupRoutes() {
        throw new Error('setupRoutes deve ser implementado');
    }
}

module.exports = BaseController;