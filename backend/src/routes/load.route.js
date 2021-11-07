const express = require('express');
const router = express.Router();
const loadController = require('../controller/load.controller');
const {authJwt} = require('../middleware');

router.post('/add_load', [authJwt.verifyToken], loadController.add_load);
router.get('/get_loads', [authJwt.verifyToken], loadController.get_loads);
router.get('/get_load/:rut', [authJwt.verifyToken], loadController.get_load);
router.get('/get_sum_loads', [authJwt.verifyToken], loadController.get_sum_loads);

module.exports = router;