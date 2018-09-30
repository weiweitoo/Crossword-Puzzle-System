'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    content: DataTypes.STRING,
    commentdate: DataTypes.DATE
  });
  comments.associate = function(models) {
   
  };
  return comments;
};