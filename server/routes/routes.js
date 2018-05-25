'use strict';

const { server } = require('./server');
const Bounce = require('bounce');
var addressController = require('../controllers/address');

// create
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
    },
});

// get by id
server.route({
    method: 'GET',
    path: '/api/v1/address/{id}',
    handler: async (req, resp) => {
        try {
            return await addressController.getById(req, resp);
        } catch (err) {
            Bounce.rethrow(err, 'system');
        }
    },
});

// getAll 
server.route({
    method: 'GET',
    path: '/api/v1/address',
    handler: async (req, resp) => {
        try {
            return await addressController.getAll(req, resp);
        } catch (err) {
            Bounce.rethrow(err, 'system');
        }
    },
});