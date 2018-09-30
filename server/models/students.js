'use strict';
module.exports = (sequelize, DataTypes) => {
  const students = sequelize.define('students', {
    content: DataTypes.STRING
  }, {});
  students.associate = function(models) {
  };
  return students;
};