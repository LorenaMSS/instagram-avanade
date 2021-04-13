const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

/* GET users listing. */
router.get('/', usuariosController.index);

router.put('/:id', usuariosController.update);

router.post('/', usuariosController.create);

module.exports = router;
