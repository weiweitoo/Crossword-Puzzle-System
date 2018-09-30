'use strict';
module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    questfilename: DataTypes.STRING,
	classId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	subjectId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	}
  }, {});
  questions.associate = function(models) {
    
  };
  return questions;
};