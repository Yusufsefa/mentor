var path = require('path');
var config = require('../dbconfig');

module.exports.login = function(req, res) {
    res.sendFile(path.join(__dirname, '../views', 'login.html'));
};

module.exports.loginPost = function(req, res) {

};