var config = require('../dbconfig');


/*
req: username, password
response: 200 - { kullaniciId }, 403 
*/
module.exports.login = function(req, res) {

};

/*
req:
response: 200
*/
module.exports.register = function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var ad = req.body.ad;
    var soyad = req.body.soyad;
    var sql = 'INSERT INTO users(email, password, ad, soyad) VALUES (?,?,?,?)';
    config.query(sql, [email, password, ad, soyad], (err, result) => {
        if (err) throw err;
        res.write('Insterted...');
        res.end();
    });
};

module.exports.getStudents = function(req, res) {

}

module.exports.getQuestions = function(req, res) {

}

module.exports.answerQuestion = function(req, res) {

}

module.exports.getProfileInfo = function(req, res) {

}

module.exports.updateProfile = function(req, res) {

}