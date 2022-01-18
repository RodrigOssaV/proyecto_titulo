const express = require('express');
const router = express.Router();
const {verifySignUp, authJwt} = require('../middleware');
const controller = require('../controller/usuario.controller');

router.post('/auth/signup',[verifySignUp.checkDuplicateUsernameOrEmail], controller.signup);
router.post('/auth/signin', controller.signin);

router.get('/auth/get_users', [authJwt.verifyToken], controller.getAllUsers);

module.exports = router;