'use strict';
module.exports = (sequelize, DataTypes) => {
  const classmember = sequelize.define('classmember', {
    userId: DataTypes.INTEGER
  }, {});

  classmember.associate = function(models) {
    
  };
  return classmember;
};