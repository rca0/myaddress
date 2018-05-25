'use strict'

const Bounce = require('bounce');
const Boom = require('boom');
const model = require('../models/index');

module.exports = {
    async create(req, resp) {
        let result = null;
        try {
            result = await model.myaddress.create({
                state: req.payload.state,
                city: req.payload.city,
                zipcode: req.payload.zipcode,
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
            return {address: result}
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
    async updateById(req, resp) {
        let new_address = null;
        let old_address = null;
        old_address = await this.getById(req, resp);
        if (old_address.address === null) {
            return Boom.notFound();
        }
        try {
            await model.myaddress.update({
                zipcode: req.payload.zipcode,
                city: req.payload.city,
                state: req.payload.state,
            }, {
                where: {id: req.params.id},
            });
        } catch (err) {
            Bounce.rethrow(err, 'system');
        }
        new_address = await this.getById(req, resp);
        return new_address.address.dataValues;
    },
};