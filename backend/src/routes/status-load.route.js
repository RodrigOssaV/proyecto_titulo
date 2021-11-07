const express = require('express');
const router = express.Router();
const statusloadController = require('../controller/status-load.controller');
const {authJwt} = require('../middleware');

router.get('/get_statusloads', [authJwt.verifyToken], statusloadController.get_statusloads);
router.put('/update_statusload/:id_status_load', [authJwt.verifyToken], statusloadController.update_status);

module.exports = router;