var express = require('express');

var router = express.Router();

var ctrStudent = require('../controller/studentController');

router.post('/login');
router.post('/register');
router.post('/addQuestion', ctrStudent.addQuestions);
router.get('/getQuestionList', ctrStudent.getQuestion);
router.get('/:id/getMentorInfo');
router.get('/:id/getProfileInfo');
router.post('/:id/updateProfile');

module.exports = router;