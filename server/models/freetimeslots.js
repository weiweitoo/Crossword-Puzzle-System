'use strict';
module.exports = (sequelize, DataTypes) => {
  const freetimeslots = sequelize.define('freetimeslots', {
    timeslotDay: DataTypes.STRING,
    timeslotTime: DataTypes.STRING
  }, {});
  freetimeslots.associate = function(models) {
    
  };  
  return freetimeslots;
};