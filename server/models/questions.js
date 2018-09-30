'use strict';
module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    questfilename: DataTypes.STRING
  }, {});
  questions.associate = function(models) {
    
  };
  return questions;
};