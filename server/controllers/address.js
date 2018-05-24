var myaddress = require('../models').myaddress;

module.exports = {
    async create(req, resp) {
        try {
            await myaddress.create({
                state: req.body.state,
                city: req.body.city,
                zipcode: req.body.zipcode,
            })
        } catch (err) {
            console.log(err);
        }
    },
};