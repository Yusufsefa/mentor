var config = require('../dbconfig');

module.exports.addQuestions = function(req, res) {
    var question = req.query.question;
    var answer = req.query.answer;
    var branchId = req.query.branchId;
    var studentId = req.query.studentId;
    var mentorId = req.query.mentorId;

    var sql = 'INSERT INTO questions(question, answer, branchId, studentId, mentorId) VALUES (?,?,?,?,?)'

    config.query(sql, [question, answer, branchId, studentId, mentorId], (err, result) => {
        if (err) throw err;
        res.write('Inserted...');
        res.end();
    });

};