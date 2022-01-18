const express = require('express');
const router = express.Router();
const driverController = require('../controller/driver.controller');
const {authJwt} = require('../middleware');

/* CRUD drivers */
router.post('/add_driver', [authJwt.verifyToken, authJwt.isAdmin], driverController.add_driver);
router.get('/get_drivers', [authJwt.verifyToken], driverController.get_drivers);
router.get('/get_driver/:rut', [authJwt.verifyToken], driverController.get_driver);
router.delete('/delete_driver/:rut', [authJwt.verifyToken, authJwt.isAdmin], driverController.delete_driver);
router.put('/update_driver/:rut', [authJwt.verifyToken, authJwt.isAdmin], driverController.update_driver);
router.post('/import_drivers', [authJwt.verifyToken, authJwt.isAdmin], driverController.import_drivers);

/* Stadistic */
router.get('/best_driver', [authJwt.verifyToken], driverController.best_driver);
router.get('/top_drivers', [authJwt.verifyToken], driverController.top_drivers);

module.exports = router;