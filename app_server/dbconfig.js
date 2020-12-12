const mysql = require('mysql');

const config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mentorum',
    multipleStatements: true
});

module.exports = config;