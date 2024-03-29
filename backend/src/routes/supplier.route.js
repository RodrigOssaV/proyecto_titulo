const express = require('express');
const router = express.Router();
const supplierController = require('../controller/supplier.controller');
const {authJwt, handle_error} = require('../middleware');

router.post('/add_supplier', [authJwt.verifyToken, handle_error.handleErrorSupplier], supplierController.add_supplier);
router.get('/get_suppliers', [authJwt.verifyToken], supplierController.get_suppliers);
router.get('/get_supplier/:rut', [authJwt.verifyToken], supplierController.get_supplier);
router.delete('/delete_supplier/:rut', [authJwt.verifyToken], supplierController.delete_supplier);
router.put('/update_supplier/:rut', [authJwt.verifyToken], supplierController.update_supplier);
router.post('/import_suppliers', [authJwt.verifyToken], supplierController.import_suppliers);
router.get('/best_supplier', [authJwt.verifyToken], supplierController.best_supplier);
router.get('/top_suppliers', [authJwt.verifyToken], supplierController.top_suppliers);

/* MOVIL ROUTE */
router.get('/get_movil_sup', supplierController.get_suppliers);

module.exports = router;