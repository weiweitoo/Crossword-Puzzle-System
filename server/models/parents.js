'use strict';
module.exports = (sequelize, DataTypes) => {
  const parents = sequelize.define('parents', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    childrenId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  return parents;
};