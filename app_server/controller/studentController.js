var config = require('../dbconfig');

/*
req: 
question, id
response: 
200
*/
module.exports.addQuestions = function(req, res) {
    var question = req.body.question;
    var answer = req.body.answer;
    var branchId = req.body.branchId;
    var studentId = req.body.studentId;
    var mentorId = req.body.mentorId;
    var date = req.body.date;

    var sql = 'INSERT INTO questions(question, answer, branchId, studentId, mentorId, date) VALUES (?,?,?,?,?,?)'

    config.query(sql, [question, answer, branchId, studentId, mentorId, date], (err, result) => {
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
module.exports.getQuestion = function(req, res) {
    var studentId = req.params.studentId;

    var sql = 'SELECT * FROM questions q, students s WHERE q.studentId = s.studentId AND s.studentId = ?'
    try {
        config.query(sql,[studentId], function(err, rows) {
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
module.exports.login = function(req, res) {
    var sql = 'SELECT s.studentId FROM users u, students s WHERE u.email = ? AND u.password = ? AND u.userId = s.userId';
    try {
        config.query(sql, [req.body.email, req.body.password], function(err, rows) {
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
req: ad, soyad, mail, şifre, alanId
response: 200
*/
module.exports.register = async function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var Name = req.body.name;
    var LastName = req.body.lastName;
    var branchId = req.body.branchId;
    var sql = 'INSERT INTO users(email, password, name, lastName) VALUES (?,?,?,?)';

    config.query(sql, [email, password, Name, LastName], (err, row) => {
        if (err) throw err;
        res.write('Inserted..')

        config.query('SELECT MAX(userId) as "lastId" from users', (err, row) => {
            if (err) throw err;
            var lastId = JSON.stringify(row[0].lastId);
            res.end();

            config.query('INSERT INTO students(userId, branchId) VALUES (?,?)', [lastId, branchId], (err) => {
                if (err) throw err;
                res.status(200);
            });

        });

    });

};

module.exports.getMentorInfo = function(req, res) {

    var sql = 'SELECT u.name ,u.lastName, m.description, m.mentorId  FROM users u, students s, mentors m WHERE s.studentId = ? AND m.mentorId = s.mentorId AND m.userId = u.userId';
    try {
        config.query(sql, [req.params.studentId], function(err, mentorData) {
            if (err) throw err;

            if (mentorData.length > 0)
                config.query('SELECT b.branchName FROM mentors m, branchs b WHERE m.branchId = b.branchId AND m.mentorId = ?', [mentorData[0].mentorId],
                    (err, mentorBranch) => {

                        mentorData[0].branch = mentorBranch[0];
                        res.json(mentorData[0]);

                    });
            else {
                res.status(404)
            }

        });

    } catch (err) {
        throw err
    }
};

module.exports.getProfileInfo = function(req, res) {
    var sql = 'SELECT u.Name, u.LastName, u.email, s.branchId, u.password, s.mentorId from users u, students s WHERE s.userId = u.userId AND s.studentId = ?'
    try {
        config.query(sql, [req.params.studentId], function(err, rows) {
            if (err) throw err;

            if (rows.length > 0)
                config.query('SELECT * from branchs', (err, rowBranch) => {
                    rows[0].branchs = rowBranch;
                    res.json(rows[0])
                });
            else {
                res.status(404)
            }
        });

    } catch (err) {
        throw err
    }

};

module.exports.updateProfile = function(req, res) {
    var sql = 'UPDATE users u, students s SET u.Name = ?, u.LastName = ?, u.email = ?, u.password = ? , s.branchId = ? WHERE u.userId = s.userId AND s.studentId = ?';
    try {
        config.query(sql, [
                req.body.name,
                req.body.lastName,
                req.body.email,
                req.body.password,
                req.body.branchId,
                req.params.studentId
            ],
            function(err, rows) {
                if (err) throw err;
                res.write('Updated...');
                res.end();
            });

    } catch (err) {
        throw err
    }
};