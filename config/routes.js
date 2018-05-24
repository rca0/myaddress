const { server } = require('./server');
const Bounce = require('bounce');

const register_routes = () => {
    server.route({
        method: 'POST',
        path: '/api/v1/address',
        handler: async (request, h) => {
            let result = null;
            try {
                return await address.create;                
            } catch (err) {
                Bounce.rethrow(err, 'system');
            }
            return resull;
        }
    });
};

module.exports.register_routes = register_routes;