'use strict'

var model = require('../models/index');
const Bounce = require('bounce');

module.exports = {
    async create(req, resp) {
        let result = null;
        try {
            result = await model.myaddress.create({
                state: req.params.state,
                city: req.params.city,
                zipcode: req.params.zipcode,
            });
            return {address: result}
        } catch (err) {
            Bounce.rethrow(err, 'system');
        }
    },
    async getById(req, resp) {
        let result = null;
        try {
            result = await model.myaddress.find({
                where: {id: req.params.id}
            });
            return {addresss: result}
        } catch (err) {
            Bounce.rethrow(err, 'system');
        }
    },
    async getAll(req, resp) {
        let result = null
        try {
            result = await model.myaddress.findAll({});
            return {
                total: result.length,
                addresses: result
            }
        } catch (err) {
            Bounce.rethrow(err, 'system');
        }
    },
};