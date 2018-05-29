'use strict'

const Bounce = require('bounce');
const Boom = require('boom');
const model = require('../models/index');
const fetch = require('async-request');

const URL = 'http://apps.widenet.com.br/busca-cep/api/cep/';
const msg = 'CEP não encontrado';

module.exports = async (value) => 
    new Promise((resolve, reject) => {
    request(value, (error, response, data) => {
        if(error) reject(error)
        else resolve(data)
    })
})

module.exports = {
    async create(req, resp) {
        let zipcode = req.payload.zipcode;
        let result = null;
        try {
            let res = await fetch(`${URL}${zipcode}`);
            if (!res) {
                return Boom.internal();
            }
            else if (res.body == msg) {
                return {message: res.body}
            }
        } catch (err) {
            Bounce.rethrow(err, 'system');
        }
        try {
            result = await model.myaddress.create({
                state: req.payload.state,
                city: req.payload.city,
                zipcode: req.payload.zipcode,
            });
            console.log(result);
            return {address: result}
        } catch (err) {
            Bounce.rethrow(err, 'system');
        }
    },
    async getById(addressId) {
        let result = null;
        try {
            result = await model.myaddress.find({
                where: {id: addressId}
            });
            return {address: result}
        } catch (err) {
            Bounce.rethrow(err, 'system');  
        }
    },
    async getAll() {
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
    async deleteById(req, resp) {
        let result = null;
        let old_address = null;
        old_address = await this.getById(req, resp);
        if (old_address.address === null) {
            return Boom.notFound();
        }
        try {
            result = await model.myaddress.destroy({
                where: {id: req.params.id}
            });
        } catch (err) {
            Bounce.rethrow(err, 'system');  
        }
        return result
    },
};