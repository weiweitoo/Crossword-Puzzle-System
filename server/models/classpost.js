'use strict';
module.exports = (sequelize, DataTypes) => {
  const classpost = sequelize.define('classpost', {
    posttitle: DataTypes.STRING,
    postdescription: DataTypes.STRING,
    postdate: DataTypes.DATE
  }, {});
  classpost.associate = function(models) {
    
  };
  return classpost;
};