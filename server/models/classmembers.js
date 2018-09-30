'use strict';
module.exports = (sequelize, DataTypes) => {
  const classmembers = sequelize.define('classmembers', {
    userId: DataTypes.INTEGER
  });

  classmembers.associate = function(models) {
   
  };
  return classmembers;
};