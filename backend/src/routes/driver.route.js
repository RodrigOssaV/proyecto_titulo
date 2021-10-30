const express = require('express');
const router = express.Router();
const driverController = require('../controller/driver.controller');

router.post('/add_driver', driverController.add_driver);
router.get('/get_drivers', driverController.get_drivers);
router.get('/get_driver/:rut', driverController.get_driver);
router.delete('/delete_driver/:rut', driverController.delete_driver);
router.put('/update_driver/:rut', driverController.update_driver);
router.get('/best_driver', driverController.best_driver);

module.exports = router;