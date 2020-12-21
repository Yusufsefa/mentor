var express = require('express');

var router = express.Router();

var ctrStudent = require('../controller/studentController');

router.post('/login', ctrStudent.login);
router.post('/register', ctrStudent.register);
router.post('/addQuestion/:studentId', ctrStudent.addQuestions);
router.get('/getQuestionList/:studentId', ctrStudent.getQuestion);
router.get('/getMentorInfo/:studentId', ctrStudent.getMentorInfo);
router.get('/getProfileInfo/:studentId', ctrStudent.getProfileInfo);
router.post('/updateProfile/:studentId', ctrStudent.updateProfile);

module.exports = router;