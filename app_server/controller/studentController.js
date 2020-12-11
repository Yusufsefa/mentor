var config = require('../dbconfig');

module.exports.addQuestions = function(req, res) {
    var question = req.body.question;
    var answer = req.body.answer ;
    var branchId = req.body.branchId;
    var studentId = req.body.studentId;
    var mentorId = req.body.mentorId;

    var sql = 'INSERT INTO questions(question, answer, branchId, studentId, mentorId) VALUES (?,?,?,?,?)'

    config.query(sql, [question, answer, branchId, studentId, mentorId], (err, result) => {
        if (err) throw err;
        res.write('Inserted...');
        res.end();
    });

};

module.exports.getQuestion = function(req, res) {
    var sql = 'SELECT * FROM questions'
    try {
        config.query(sql, function(err, rows) {
            if (err) throw err;
            res.json(rows);
        });

    } catch (err) {
        throw err
    }

};
