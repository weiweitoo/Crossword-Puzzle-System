'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    content: DataTypes.STRING,
    commentdate: DataTypes.DATE
  }, {});
  comment.associate = function(models) {
    comment.belongsTo(models.user,{
    	foreignKey: 'userId',
    	onDelete: 'CASCADE',
    });
    comment.belongsTo(models.classpost,{
    	foreignKey: 'classpostId',
    	onDelete: 'CASCADE',
    });
  };
  return comment;
};