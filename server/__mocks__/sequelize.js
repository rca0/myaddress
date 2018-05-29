var SequelizeMock = require('sequelize-mock');
var DBConnectionMock = new SequelizeMock();

var addressMock = DBConnectionMock.define('myaddress', {
    'id': '76a93b30-616a-11e8-a691-277bd7b85a2c',
    'city': 'Joinville',
    'state': 'Santa Catarina',
    'zipcode': '89218112',
}, {
    instanceMethods: {
        getById: function () {
            return this.get('id') + ' ' 
                 + this.get('city') + ' ' 
                 + this.get('state') + ' ' 
                 + this.get('zipcode');
        },
    },
});

exports.getById = function (addressId) {
    return addressMock.find({
        where: {
            id: '76a93b30-616a-11e8-a691-277bd7b85a2c',
        }, 
    }).then(function (address) {
        address.get('id');
        address.get('city');
        address.get('state');
        address.get('zipcode');
    })
};