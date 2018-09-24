'use strict';
module.exports = (sequelize, DataTypes) => {
  const reaction = sequelize.define('reaction', {
    reactiontype: DataTypes.INTEGER
  }, {});
  reaction.associate = function(models) {
    reaction.belongsTo(models.user,{
    	foreignKey: 'userId',
    	onDelete: 'CASCADE',
    });
    reaction.belongsTo(models.classpost,{
    	foreignKey: 'classpostId',
    	onDelete: 'CASCADE',
    });
  };
  return reaction;
};