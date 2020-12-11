var express = require('express');

var router = express.Router();

var ctrStudent = require('../controller/studentController');

router.post('/login', ctrStudent.login);
router.post('/register', ctrStudent.register);
router.post('/:id/addQuestion', ctrStudent.addQuestions);
router.get('/:id/getQuestionList', ctrStudent.getQuestion);
router.get('/:id/getMentorInfo', ctrStudent.getMentorInfo);
router.get('/:id/getProfileInfo', ctrStudent.getProfileInfo);
router.post('/:id/updateProfile', ctrStudent.updateProfile);

module.exports = router;