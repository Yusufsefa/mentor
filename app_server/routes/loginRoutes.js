var express = require('express');

var router = express.Router();

var ctrLogin = require('../controller/logincontroller');

router.get('/', ctrLogin.login);

router.post('/', ctrLogin.loginPost);

module.exports = router;