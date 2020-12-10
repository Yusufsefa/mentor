var routeAdmin = require('./adminRoutes');
var routeStudent = require('./studentRoutes');

module.exports = function(app) {
    app.use('/admin', routeAdmin);
    app.use('/student', routeStudent);
}