'use strict';
module.exports = (sequelize, DataTypes) => {
  const classposts = sequelize.define('classposts', {
    posttitle: DataTypes.STRING,
    postdescription: DataTypes.STRING,
    postdate: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  return classposts;
};