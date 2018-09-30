'use strict';
module.exports = (sequelize, DataTypes) => {
  const students = sequelize.define('students', {
  	userId: {
  	  type: DataTypes.INTEGER,
  	  allowNull: false,
  	}
  });
  return students;
};