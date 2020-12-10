var express = require('express');

var router = express.Router();

var ctrMentor = require('../controller/studentController');

router.post('/add', ctrMentor.addQuestions);

module.exports = router;