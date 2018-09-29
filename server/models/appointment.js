'use strict';
module.exports = (sequelize, DataTypes) => {
  const appointment = sequelize.define('appointment', {
    appointmenttitle: DataTypes.STRING,
    appointmentdesc: DataTypes.STRING,
    appointmentdate: DataTypes.DATE
  }, {});
  appointment.associate = function(models) {
    appointment.belongsTo(models.student,{
    	foreignKey: 'studentId',
    	onDelete: 'CASCADE',
    });
    appointment.belongsTo(models.teacher,{
    	foreignKey: 'teacherId',
    	onDelete: 'CASCADE',
    });
  };
  return appointment;
};