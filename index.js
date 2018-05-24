const { start } = require('./config/server');
const { register_routes } = require('./config/routes');

start();
register_routes();