const { server } = require('./server');
const Bounce = require('bounce');
var addressController = require('../controllers').address;

const register_routes = () => {
    server.route({
        method: 'POST',
        path: '/api/v1/address',
        handler: async (request, h) => {
            let result = null;
            try {
                return await addressController.create;                
            } catch (err) {
                Bounce.rethrow(err, 'system');
            }
            return result;
        }
    });
};

module.exports.register_routes = register_routes;