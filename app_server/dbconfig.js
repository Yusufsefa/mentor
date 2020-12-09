const mysql = require('mysql');

const config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mentor',
    multipleStatements: true
});

module.exports = config;