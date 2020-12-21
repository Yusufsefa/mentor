var express = require('express');

var router = express.Router();

var mentorController = require('../controller/mentorController');

router.post('/login', mentorController.login);
router.post('/register', mentorController.register);
router.get('/getStudents/:mentorId', mentorController.getStudents)
router.get('/getQuestions/:mentorId', mentorController.getQuestions)
router.post('/answerQuestion', mentorController.answerQuestion)
router.get('/getProfileInfo/:mentorId', mentorController.getProfileInfo);
router.post('/updateProfile/:mentorId', mentorController.updateProfile);

module.exports = router;