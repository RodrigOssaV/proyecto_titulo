const express = require('express');
const router = express.Router();
const {verifySignUp} = require('../middleware');
const controller = require('../controller/usuario.controller');

router.post("/auth/signup",[verifySignUp.checkDuplicateUsernameOrEmail,verifySignUp.checkRolesExisted], controller.signup);
router.post("/auth/signin", controller.signin);

module.exports = router;