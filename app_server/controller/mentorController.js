var config = require('../dbconfig');


/*
req: username, password
response: 200 - { kullaniciId }, 403 
*/
module.exports.login = function (req, res) {
    var sql = 'SELECT m.mentorId FROM users u, mentors m WHERE u.email = ? AND u.password = ? AND u.userId = m.userId';
    try {
        config.query(sql, [req.body.email, req.body.password], function (err, rows) {
            if (err) throw err;
            if (rows.length > 0)
                res.json(rows[0]);
            else
                res.status(403);

            res.end();
        });
    } catch (err) {
        throw err
    }
};

/*
req:
response: 200
*/
module.exports.register = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var ad = req.body.ad;
    var soyad = req.body.soyad;
    var description = req.body.description;

    try {
        var sqlUser = 'INSERT INTO users(email, password, ad, soyad) VALUES (?,?,?,?)';
        var sqlLastId = 'SELECT MAX(userId) as "lastId" from users';
        var sqlMentor = 'INSERT INTO mentors(userId, description) VALUES (?,?)';

        // user table insert
        config.query(sqlUser, [email, password, ad, soyad], (err, rows) => {
            if (err) throw err;
            // get last userId
            config.query(sqlLastId, (err, rows2) => {
                if (err) throw err;
                var lastId = JSON.stringify(rows2[0].lastId);
                // mentor table insert
                config.query(sqlMentor, [lastId, description], (err, rows3) => {
                    if (err) throw err;
                    res.status(200);
                    res.end();
                });
            });
        });
    } catch (err) {
        res.status(500);
        res.end();
    }
};



module.exports.getStudents = function (req, res) {
    var mentorId = req.params.mentorId;
    var sql = `SELECT 
    concat(u.ad, ' ',u.soyad) as 'ad soyad',
    u.email,
    b.branchName
    FROM students s, users u, branchs b
    WHERE s.userId=u.userId AND s.branchId=b.branchId AND s.mentorId=?`
    try {
        config.query(sql, [mentorId], (err, rows) => {
            if (err) throw err;
            if (rows.length > 0) {
                res.json(rows[0])
            } else
                res.status(404);
            res.end();
        });
    } catch (err) {
        res.status(500);
        res.end();
    }
}

module.exports.getQuestions = function (req, res) {
    var mentorId = req.params.mentorId;
    var sql = `SELECT q.*, b.branchName FROM questions q, branchs b 
    WHERE q.branchId=b.branchId AND q.mentorId=?`;
    try {
        config.query(sql, [mentorId], (err, rows) => {
            if (err) throw err;
            if (rows.length > 0)
                res.json(rows);
            else
                res.status(404);
            res.end();
        });

    } catch (err) {
        res.status(500);
        res.end();
    }


}

module.exports.answerQuestion = function (req, res) {
    var questionId = req.body.questionId;
    if (questionId) {
        var answer = req.body.answer;
        var sql = `UPDATE questions SET answer=? WHERE questionId=?`;
        try {
            config.query(sql, [answer, questionId], (err, rows) => {
                if (err) throw err;
                res.status(200);
                res.end()
            });
        } catch (err) {
            res.status(500);
            res.end();
        }
    } else{
        res.status(409);
        res.end();
    }
}

module.exports.getProfileInfo = function (req, res) {

}

module.exports.updateProfile = function (req, res) {

}