const  express = require('express');
const produtosController = require('./controllers/produtosController');

const router = express.Router();

//router.get('/produtos', (req, res) => res.status(200).send('Router funfando.'));
router.get('/produtos', produtosController.consulta);

module.exports = router;