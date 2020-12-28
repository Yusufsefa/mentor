var config = require('../dbconfig');


module.exports.login = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    var sql = 'CALL login(?,?)'

    config.query(sql, [email, password], (err, rows) => {
        if (err) throw err;
        if (rows.length > 0)
            res.json(rows[0][0]);
        else
            res.status(403);
        res.end();
    });
};

module.exports.getAllBranchs = function (req, res) {
    var sql = 'SELECT * FROM branchs'

    config.query(sql, [], (err, rows) => {
        if (err) throw err;
        if (rows.length == 0)
            res.status(404);
        else
            res.json(rows);
        res.end();
    }); 
};
