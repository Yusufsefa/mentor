var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var session = require('express-session');

//const dboperations = require('./dboperation');

const config = require('./app_server/dbconfig');
const path = require('path');

var app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app_server/routes/routeManager')(app);


app.listen(3000);