'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    content: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    student.belongsTo(models.user,{
    	foreignKey: 'userId',
    	onDelete: 'CASCADE',
    });
    student.belongsTo(models.parent,{
    	foreignKey: 'parentId',
    	onDelete: 'CASCADE',
    });
    student.hasMany(models.appointment {
      foreignKey: 'studentId',
      as: 'appointments',
    });
  };
  return student;
};