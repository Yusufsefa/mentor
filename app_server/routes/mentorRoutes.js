var express = require('express');

var router = express.Router();

var mentorController = require('../controller/mentorController');

router.post('/login', mentorController.login);
router.post('/register', mentorController.register);
router.get('/:mentorId/getStudents', mentorController.getStudents)
router.get('/:mentorId/getQuestions', mentorController.getQuestions)
router.post('/answerQuestion', mentorController.answerQuestion)
router.get('/:mentorId/getProfileInfo', mentorController.getProfileInfo);
router.post('/:mentorId/updateProfile', mentorController.updateProfile);

module.exports = router;