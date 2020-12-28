var express = require('express');

var router = express.Router();

var ctrCommon = require('../controller/commonController');

router.post('/login', ctrCommon.login);
router.get('/getAllBranchs', ctrCommon.getAllBranchs);


module.exports = router;