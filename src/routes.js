const express = require('express');
const routes  = express.Router();

const ProductController = require('./controllers/ProductController');

/*app.get('rota', ), '/' encaminha para a rota raiz*/
/*req: contem todos os detalhes da requisição*/
/*res: resposta para a requisição*/

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.get('./products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;