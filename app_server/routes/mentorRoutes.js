const { json } = require('body-parser');
var express = require('express');

var router = express.Router();

var mentorController = require('../controller/mentorController');

router.post('/login', mentorController.login);
router.post('/register', mentorController.register);
router.get('/:id/getStudents', mentorController.getStudents)
router.get('/:id/getQuestions', mentorController.getQuestions)
router.post('/answerQuestion', mentorController.answerQuestion)
router.get('/:id/getProfileInfo', mentorController.getProfileInfo);
router.post('/:id/updateProfile', mentorController.updateProfile);

module.exports = router;