const express = require('express');
const router = express.Router();
const financesControler = require('../controller/finances-driver.controller');
const {authJwt} = require('../middleware');

router.get('/get_all_finances_driver', financesControler.get_all_finances_driver);
router.get('/get_total_benefit_driver', financesControler.get_total_benefit_driver);
router.get('/results_all_drivers', [authJwt.verifyToken], financesControler.results_all_drivers);
router.get('/results_drivers_monthly', [authJwt.verifyToken], financesControler.results_drivers_monthly);
router.get('/results_drivers_by_suppliers', [authJwt.verifyToken], financesControler.results_drivers_by_suppliers);

module.exports = router;