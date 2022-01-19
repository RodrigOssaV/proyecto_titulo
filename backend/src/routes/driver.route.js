const express = require('express');
const router = express.Router();
const driverController = require('../controller/driver.controller');
const {authJwt, handle_error} = require('../middleware');

/* CRUD drivers */
router.post('/add_driver', [authJwt.verifyToken, authJwt.isAdmin, handle_error.handleErrorDriver], driverController.add_driver);
router.get('/get_drivers', [authJwt.verifyToken], driverController.get_drivers);
router.get('/get_driver/:run', [authJwt.verifyToken], driverController.get_driver);
router.delete('/delete_driver/:run', [authJwt.verifyToken, authJwt.isAdmin], driverController.delete_driver);
router.put('/update_driver/:run', [authJwt.verifyToken, authJwt.isAdmin], driverController.update_driver);
router.post('/import_drivers', [authJwt.verifyToken, authJwt.isAdmin], driverController.import_drivers);

/* Stadistic */
router.get('/best_driver', [authJwt.verifyToken], driverController.best_driver);
router.get('/top_drivers', [authJwt.verifyToken], driverController.top_drivers);

module.exports = router;