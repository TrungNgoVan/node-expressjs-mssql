const eventRouter = require('./eventRoutes');

function route(app) {
    app.use('/api', eventRouter.router);
    app.use('/', (req, res) => {
        res.send('Hello from the server!');
    });
}

module.exports = route;


