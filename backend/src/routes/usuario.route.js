const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario.controller');
const { verifyToken } = require('../auth/auth');

router.post('/register', usuarioController.registrarUsuario);
router.post('/login', usuarioController.loguearUsuario);

module.exports = router;