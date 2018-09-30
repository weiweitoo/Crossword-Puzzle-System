'use strict';
module.exports = (sequelize, DataTypes) => {
  const teachers = sequelize.define('teachers', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  teachers.associate = function(models) {
  };
  return teachers;
};