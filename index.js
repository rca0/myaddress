const { start } = require('./server/routes/server');
const { register_routes } = require('./server/routes/routes');

start();
register_routes();