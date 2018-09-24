'use strict';
module.exports = (sequelize, DataTypes) => {
  const classes = sequelize.define('classes', {
    classname: DataTypes.STRING
  }, {});
  classes.associate = function(models) {
  };
  return classes;
};