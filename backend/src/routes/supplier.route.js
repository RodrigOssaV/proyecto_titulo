const express = require('express');
const router = express.Router();
const supplierController = require('../controller/supplier.controller');
const {authJwt} = require('../middleware');

router.post('/add_supplier', [authJwt.verifyToken], supplierController.add_supplier);
router.get('/get_suppliers', [authJwt.verifyToken], supplierController.get_suppliers);
router.get('/get_supplier/:id_supplier', [authJwt.verifyToken], supplierController.get_supplier);
router.delete('/delete_supplier/:id_supplier', [authJwt.verifyToken], supplierController.delete_supplier);
router.put('/update_supplier/:id_supplier', [authJwt.verifyToken], supplierController.update_supplier);

router.get('/best_supplier', [authJwt.verifyToken], supplierController.best_supplier);
router.get('/top_suppliers', [authJwt.verifyToken], supplierController.top_suppliers);

module.exports = router;