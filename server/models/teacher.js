'use strict';
module.exports = (sequelize, DataTypes) => {
  const teacher = sequelize.define('teacher', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  teacher.associate = function(models) {

  };
  return teacher;
};