'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    content: DataTypes.STRING,
    commentdate: DataTypes.DATE
  }, {});
  comment.associate = function(models) {
   
  };
  return comment;
};