const { server } = require('./server');
const Bounce = require('bounce');
var addressController = require('../controllers/address');

const register_routes = () => {
    server.route({
        method: 'POST',
        path: '/api/v1/address',
        handler: async (req, resp) => {
            let result = null;
            try {
                result = await addressController.create(req, resp);
                return result;
            } catch (err) {
                Bounce.rethrow(err, 'system');
            }
            return result;
        }
    });
};

module.exports.register_routes = register_routes;