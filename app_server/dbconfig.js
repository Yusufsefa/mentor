const mysql = require('mysql');

const config = mysql.createConnection({
    host: 'localhost',
    user: 'alp',
    password: 'wBCxh5/qP,gS#3en',
    database: 'mentordb',
    multipleStatements: true
});

module.exports = config;