'use strict';

const { server } = require('./server');
const Bounce = require('bounce');
var addressController = require('../controllers/address');

// create address
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

// update address by id
server.route({
    method: 'PUT',
    path: '/api/v1/address/{id}',
    handler: async (req, resp) => {
        let result = null;
        try {
            result = await addressController.updateById(req, resp);
            return result;
        } catch (err) {
            Bounce.rethrow(err, 'system');
        }
    },   
});

// fetch address by id
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

// get all addresses
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