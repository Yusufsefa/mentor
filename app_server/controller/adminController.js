var config = require('../dbconfig');

module.exports.getAllStudent = function(req, res) {
    try {

        config.query('select * from students', function(err, rows) {
            if (err) throw err;
            res.json(rows);
        });

    } catch (err) {
        throw err
    }
};

module.exports.getAllMentor = function(req, res) {
    try {
        config.query('select * from mentors', function(err, rows) {
            if (err) throw err;
            res.json(rows);
        });

    } catch (err) {
        throw err
    }
};