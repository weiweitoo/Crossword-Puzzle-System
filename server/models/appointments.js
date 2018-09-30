'use strict';
module.exports = (sequelize, DataTypes) => {
  const appointments = sequelize.define('appointments', {
    appointmenttitle: DataTypes.STRING,
    appointmentdesc: DataTypes.STRING,
    appointmentdate: DataTypes.STRING,
    teacherId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  });
  return appointments;
};