'use strict';
module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define('question', {
    questfilename: DataTypes.STRING
  }, {});
  question.associate = function(models) {
   
  };
  return question;
};