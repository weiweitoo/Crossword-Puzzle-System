'use strict';
module.exports = (sequelize, DataTypes) => {
  const classposts = sequelize.define('classposts', {
    posttitle: DataTypes.STRING,
    postdescription: DataTypes.STRING,
    postdate: DataTypes.DATE
  });
  classposts.associate = function(models) {
    
  };
  return classposts;
};