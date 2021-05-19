const BaseController = require('./BaseController');

// Criar um controller para receber requisição
class UserControler extends BaseController {
    setupRoutes(basePath) {
        this.express.get(`${basePath}/usuario`, (req, res) => {
            this.get(req, res);
        });
    }

    // Devolver para o usuario os dados dele via JSON
    get(req, res) {
        return res.json({
            name: 'Filipe',
            id: 1
        });
    }
}

module.exports = UserControler;