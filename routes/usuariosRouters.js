const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
//const validarCadastro = require('../middlewares/ValidarCadastro');
/* GET users listing. */
router.get('/', usuariosController.index);

router.get('/registro', usuariosController.registro);

router.get('/login', usuariosController.login);

router.put('/:id', usuariosController.update);

router.post('/', usuariosController.create);

router.delete('/:id', usuariosController.delete);

module.exports = router;
