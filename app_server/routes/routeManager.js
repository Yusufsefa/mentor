var routeMentor = require('./mentorRoutes');
var routeStudent = require('./studentRoutes');

module.exports = function(app) {
    app.use('/mentor', routeMentor);
    app.use('/student', routeStudent);
}