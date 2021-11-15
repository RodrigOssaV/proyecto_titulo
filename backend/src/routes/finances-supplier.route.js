const express = require('express');
const router = express.Router();
const financesControler = require('../controller/finances-supplier.controller');
const {authJwt} = require('../middleware');

router.post('/add_finances_supplier', financesControler.add_finances_supplier);
router.get('/get_all_finances_supplier', financesControler.get_all_finances_supplier);
router.get('/get_total_benefit_supplier', financesControler.get_total_benefit_supplier);

module.exports = router;