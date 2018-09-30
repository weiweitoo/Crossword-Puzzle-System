'use strict';
module.exports = (sequelize, DataTypes) => {
  const subject = sequelize.define('subject', {
    subjectname: DataTypes.STRING
  }, {});
  subject.associate = function(models) {
  };
  return subject;
};