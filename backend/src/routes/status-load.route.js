const express = require('express');
const router = express.Router();
const statusloadController = require('../controller/status-load.controller');

router.get('/get_statusloads', statusloadController.get_statusloads);
router.put('/update_statusload/:id_status_load', statusloadController.update_status);

module.exports = router;