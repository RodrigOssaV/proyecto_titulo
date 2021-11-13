const express = require('express');
const router = express.Router();
const financesSupplierControler = require('../controller/financesSupplier.controller');
const {authJwt} = require('../middleware');

router.post('/add_finances', financesSupplierControler.add_finances);
router.get('/get_all_finances', financesSupplierControler.get_All_Finances);

module.exports = router;