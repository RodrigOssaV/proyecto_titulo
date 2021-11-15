const express = require('express');
const router = express.Router();
const financesControler = require('../controller/finances-driver.controller');
const {authJwt} = require('../middleware');

router.get('/get_all_finances_driver', financesControler.get_all_finances_driver);

module.exports = router;