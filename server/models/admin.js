'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  return admin;
};