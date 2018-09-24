'use strict';
module.exports = (sequelize, DataTypes) => {
  const teacher = sequelize.define('teacher', {
    //
  }, {});
  teacher.associate = function(models) {
    teacher.belongsTo(models.user,{
    	foreignKey: 'userId',
    	onDelete: 'CASCADE',
    });
    teacher.hasMany(models.question {
      foreignKey: 'teacherId',
      as: 'questions',
    });
    teacher.hasMany(models.appointment {
      foreignKey: 'teacherId',
      as: 'appointments',
    });
    teacher.hasMany(models.freetimeslot {
      foreignKey: 'teacherId',
      as: 'freetimeslots',
    });
  };
  return teacher;
};