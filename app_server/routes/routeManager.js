var routeLogin = require('./loginRoutes');
var routeHome = require('./homeRoutes');

module.exports = function(app) {
    app.use('/login', routeLogin);
    app.use('/', routeHome);
}