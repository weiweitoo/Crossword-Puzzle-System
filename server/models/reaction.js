'use strict';
module.exports = (sequelize, DataTypes) => {
  const reaction = sequelize.define('reaction', {
    reactiontype: DataTypes.INTEGER
  }, {});
  reaction.associate = function(models) {
   
  };
  return reaction;
};