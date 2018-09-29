'use strict';
module.exports = (sequelize, DataTypes) => {
  const subject = sequelize.define('subject', {
    subjectname: DataTypes.STRING
  }, {});
  subject.associate = function(models) {
    subject.hasMany(models.question, {
      foreignKey: 'subjectId',
      as: 'questions',
    });
  };
  return subject;
};