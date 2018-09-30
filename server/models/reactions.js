'use strict';
module.exports = (sequelize, DataTypes) => {
  const reactions = sequelize.define('reactions', {
    reactiontype: DataTypes.INTEGER
  }, {});
  reactions.associate = function(models) {
   
  };
  return reactions;
};