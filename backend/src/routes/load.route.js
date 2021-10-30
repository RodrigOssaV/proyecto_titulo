const express = require('express');
const router = express.Router();
const loadController = require('../controller/load.controller');

router.post('/add_load', loadController.add_load);
router.get('/get_loads', loadController.get_loads);
router.get('/get_load/:rut', loadController.get_load);
router.get('/get_sum_loads', loadController.get_sum_loads);

module.exports = router;