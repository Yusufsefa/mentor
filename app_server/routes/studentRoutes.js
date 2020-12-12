var express = require('express');

var router = express.Router();

var ctrStudent = require('../controller/studentController');

router.post('/login', ctrStudent.login);
router.post('/register', ctrStudent.register);
router.post('/:studentId/addQuestion', ctrStudent.addQuestions);
router.get('/:studentId/getQuestionList', ctrStudent.getQuestion);
router.get('/:studentId/getMentorInfo', ctrStudent.getMentorInfo);
router.get('/:studentId/getProfileInfo', ctrStudent.getProfileInfo);
router.post('/:studentId/updateProfile', ctrStudent.updateProfile);

module.exports = router;