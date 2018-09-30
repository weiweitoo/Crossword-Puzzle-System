'use strict';
module.exports = (sequelize, DataTypes) => {
  const classmembers = sequelize.define('classmembers', {
    userId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER
  });

  return classmembers;
};