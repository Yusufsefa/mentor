var config = require('../dbconfig');

/*
req: 
question, id
response: 
200
*/
module.exports.addQuestions = function (req, res) {
    var question = req.body.question;
    var answer = req.body.answer;
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

/*
req: 
id
response:
200:
[
    {
        question, answer, tarih(db,ye eklenecek), branş ismi, mentör ad soyad
    }
]
*/
module.exports.getQuestion = function (req, res) {
    var sql = 'SELECT * FROM questions'
    try {
        config.query(sql, function (err, rows) {
            if (err) throw err;
            res.json(rows);
        });

    } catch (err) {
        throw err
    }

};

/*
req: username, password
response: 200 - { kullaniciId }, 403 
*/
module.exports.login = function (req, res) {
    var sql = 'SELECT * FROM questions'
    try {
        config.query(sql, function (err, rows) {
            if (err) throw err;
            res.json(rows);
        });

    } catch (err) {
        throw err
    }

};

/*
req: ad, soyad, mail, şifre, alanId
response: 200
*/
module.exports.register = function (req, res) {
    var sql = 'SELECT * FROM questions'
    try {
        config.query(sql, function (err, rows) {
            if (err) throw err;
            res.json(rows);
        });

    } catch (err) {
        throw err
    }

};

/*
request:
response: 200 ok { ad soyad, mentörAlanAdı, hakkinda }
*/
module.exports.getMentorInfo = function (req, res) {
    var sql = 'SELECT * FROM questions'
    try {
        config.query(sql, function (err, rows) {
            if (err) throw err;
            res.json(rows);
        });

    } catch (err) {
        throw err
    }

};

/*
request:
response: 200 ok { ad, soyad, mail, şifre, alanId }
*/
module.exports.getProfileInfo = function (req, res) {
    var sql = 'SELECT * FROM questions'
    try {
        config.query(sql, function (err, rows) {
            if (err) throw err;
            res.json(rows);
        });

    } catch (err) {
        throw err
    }

};

/*
request:ad, soyad, mail, şifre, alanId
response: 200ost('/login', ctrStudent.login);
router.post('/register', ctrStudent.register);
router.post('/:id/addQuestion', ctrStudent.addQuestions);
router.get('/:id/getQuestionList', ctrStudent.getQuestion);
router.get('/:id/getMentorInfo', ctrStudent.getMentorInfo);
router.get('/:id/getProfileInfo', ctrStudent.getProfileInfo);
router.po
*/
module.exports.updateProfile = function (req, res) {
    var sql = 'SELECT * FROM questions'
    try {
        config.query(sql, function (err, rows) {
            if (err) throw err;
            res.json(rows);
        });

    } catch (err) {
        throw err
    }

};