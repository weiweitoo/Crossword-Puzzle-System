'use strict';

module.exports = (sequelize, DataTypes) => {
  const classes = sequelize.define('classes', {
    classname: DataTypes.STRING,
    teacherId: {
    	type: DataTypes.INTEGER,
    	allowNull: false,
    },
  }, {});

  return classes;
};