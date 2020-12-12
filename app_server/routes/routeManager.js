var routeAdmin = require('./adminRoutes');
var routeStudent = require('./studentRoutes');
var routeMentor = require('./mentorRoutes')

module.exports = function(app) {
    app.use('/admin', routeAdmin);
    app.use('/student', routeStudent);
    app.use('/mentor', routeMentor);
}