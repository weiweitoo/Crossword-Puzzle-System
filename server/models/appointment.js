'use strict';
module.exports = (sequelize, DataTypes) => {
  const appointment = sequelize.define('appointment', {
    appointmenttitle: DataTypes.STRING,
    appointmentdesc: DataTypes.STRING,
    appointmentdate: DataTypes.DATE
  });
  appointment.associate = function(models) {
    
  };
  return appointment;
};