'use strict';
module.exports = (sequelize, DataTypes) => {
  const parent = sequelize.define('parents', {
    //no attributes
  });
  parent.associate = function(models) {
  };
  return parent;
};