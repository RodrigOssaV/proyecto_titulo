const express = require('express');
const router = express.Router();
const driverController = require('../controller/driver.controller');

/* CRUD drivers */
router.post('/add_driver', driverController.add_driver);
router.get('/get_drivers', driverController.get_drivers);
router.get('/get_driver/:rut', driverController.get_driver);
router.delete('/delete_driver/:rut', driverController.delete_driver);
router.put('/update_driver/:rut', driverController.update_driver);

/* Stadistic */
router.get('/best_driver', driverController.best_driver);
router.get('/top_drivers', driverController.top_drivers);

module.exports = router;