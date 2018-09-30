'use strict';
module.exports = (sequelize, DataTypes) => {
  const subjects = sequelize.define('subjects', {
    subjectname: DataTypes.STRING
  }, {});
  subjects.associate = function(models) {
  };
  return subjects;
};