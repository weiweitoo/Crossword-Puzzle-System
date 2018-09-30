'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    content: DataTypes.STRING,
    commentdate: DataTypes.DATE,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    classpostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  comments.associate = function(models) {
   
  };
  return comments;
};