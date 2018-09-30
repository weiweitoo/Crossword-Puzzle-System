'use strict';
module.exports = (sequelize, DataTypes) => {
  const freetimeslots = sequelize.define('freetimeslots', {
    timeSlotDay: DataTypes.STRING,
    timeSlotTime: DataTypes.STRING
  }, {});
  freetimeslots.associate = function(models) {

  };  
  return freetimeslots;
};