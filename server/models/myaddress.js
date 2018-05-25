'use strict';

module.exports = (sequelize, DataTypes) => {
  var myaddress = sequelize.define('myaddress', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {});
  myaddress.associate = function(models) {
    // associations can be defined here
  };
  return myaddress;
};