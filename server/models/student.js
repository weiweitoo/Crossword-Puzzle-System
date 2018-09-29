'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    content: DataTypes.STRING
  }, {});
  student.associate = function(models) {
  };
  return student;
};