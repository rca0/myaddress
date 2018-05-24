'use strict';
module.exports = (sequelize, DataTypes) => {
  var myaddress = sequelize.define('myaddress', {
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {});
  myaddress.associate = function(models) {
    // associations can be defined here
  };
  return myaddress;
};