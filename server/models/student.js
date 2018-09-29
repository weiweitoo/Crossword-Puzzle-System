'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    content: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    student.belongsTo(models.user,{
      unique:true,
    	foreignKey: 'userId',
    	onDelete: 'CASCADE',
    });
    student.belongsTo(models.parent,{
      unique:true,
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