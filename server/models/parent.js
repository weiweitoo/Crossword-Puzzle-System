'use strict';
module.exports = (sequelize, DataTypes) => {
  const parent = sequelize.define('parent', {
    //no attributes
  }, {});
  parent.associate = function(models) {
    
  };
  return parent;
};