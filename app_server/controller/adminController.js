var config = require('../dbconfig');

module.exports.login = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    try {
        config.query('select * from admins WHERE email=? AND password=?', [email, password], function (err, rows) {
            if (err) throw err;
            if (rows.length == 1)
                res.json(rows[0])
            else
                res.status(404)
            res.end()

        });

    } catch (err) {
        throw err
    }
};

module.exports.getAllStudent = function (req, res) {
    try {
        config.query('select * from students', function (err, rows) {
            if (err) throw err;
            res.json(rows);
        });

    } catch (err) {
        throw err
    }
};

module.exports.getAllMentor = function (req, res) {
    try {
        config.query('select * from mentors', function (err, rows) {
            if (err) throw err;
            res.json(rows);
        });

    } catch (err) {
        throw err
    }
};