const express = require('express');
const router = express.Router();
const supplierController = require('../controller/supplier.controller');

router.post('/add_supplier', supplierController.add_supplier);
router.get('/get_suppliers', supplierController.get_suppliers);
router.get('/get_supplier/:id_supplier', supplierController.get_supplier);
router.delete('/delete_supplier/:id_supplier', supplierController.delete_supplier);
router.put('/update_supplier/:id_supplier', supplierController.update_supplier);
router.get('/best_supplier', supplierController.best_supplier);

module.exports = router;