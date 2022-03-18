const express = require('express');
const router = express.Router();
const loadController = require('../controller/load.controller');
const {authJwt} = require('../middleware');

router.post('/add_load', [authJwt.verifyToken], loadController.add_load);
router.get('/get_loads', [authJwt.verifyToken], loadController.get_loads);
router.get('/get_load/:run', [authJwt.verifyToken], loadController.get_load);
router.get('/get_sum_loads', [authJwt.verifyToken], loadController.get_sum_loads);

router.get('/get_total_driver/:run', loadController.get_total_driver);
router.get('/get_loads_today/:run', [authJwt.verifyToken], loadController.get_loads_today);
router.get('/get_loads_lastweeks/:run', [authJwt.verifyToken], loadController.get_loads_lastweeks);
router.get('/get_loads_final/:run', [authJwt.verifyToken], loadController.get_loads_finalweeks);
router.get('/get_loads_monthly/:run', [authJwt.verifyToken], loadController.get_load_monthly);
router.post('/search_between_dates', loadController.search_between_dates);

module.exports = router;