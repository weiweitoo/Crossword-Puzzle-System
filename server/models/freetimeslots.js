'use strict';
module.exports = (sequelize, DataTypes) => {
  const freetimeslots = sequelize.define('freetimeslots', {
    timeslotfilename: DataTypes.STRING
  }, {});
  freetimeslots.associate = function(models) {
    
  };
  return freetimeslots;
};