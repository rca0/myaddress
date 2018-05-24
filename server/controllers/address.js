var model = require('../models/index');

module.exports = {
    async create(req, resp) {
        let result = null;
        try {
            result = await model.myaddress.create({
                state: req.payload.state,
                city: req.payload.city,
                zipcode: req.payload.zipcode,
            });
            return result
        } catch (err) {
            Bounce.rethrow(err, 'system');
        }
    },
};