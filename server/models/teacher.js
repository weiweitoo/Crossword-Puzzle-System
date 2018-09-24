'use strict';
module.exports = (sequelize, DataTypes) => {
  const teacher = sequelize.define('teacher', {
    //
  }, {});
  teacher.associate = function(models) {
  };
  return teacher;
};