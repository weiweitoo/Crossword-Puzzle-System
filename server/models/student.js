'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
  	userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  student.associate = function(models) {
  };
  return student;
};