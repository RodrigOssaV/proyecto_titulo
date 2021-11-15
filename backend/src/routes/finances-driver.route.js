const express = require('express');
const router = express.Router();
const financesControler = require('../controller/finances-driver.controller');
const {authJwt} = require('../middleware');

router.get('/get_all_finances_driver', financesControler.get_all_finances_driver);
router.get('/get_total_benefit_driver', financesControler.get_total_benefit_driver);

module.exports = router;