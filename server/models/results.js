'use strict';
module.exports = (sequelize, DataTypes) => {
  const results = sequelize.define('results', {
    score: DataTypes.FLOAT,
    timespent: DataTypes.INTEGER,
    questId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	studentId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	}
  });
  results.associate = function(models) {
    // associations can be defined here
  };
  return results;
};