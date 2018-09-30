'use strict';
module.exports = (sequelize, DataTypes) => {
  const admins = sequelize.define('admins', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  return admins;
};