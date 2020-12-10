var express = require('express');

var router = express.Router();

var ctrMentor = require('../controller/mentorController');

router.get('/allStudent', ctrMentor.getAllStudent);
router.get('/allMentor', ctrMentor.getAllMentor);

module.exports = router;