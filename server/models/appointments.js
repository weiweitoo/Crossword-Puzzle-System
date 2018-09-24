'use strict';
module.exports = (sequelize, DataTypes) => {
  const appointments = sequelize.define('appointments', {
    appointmenttitle: DataTypes.STRING,
    appointmentdesc: DataTypes.STRING,
    appointmentdate: DataTypes.DATE
  }, {});
  appointments.associate = function(models) {
    
  };
  return appointments;
};