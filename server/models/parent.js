'use strict';
module.exports = (sequelize, DataTypes) => {
  const parent = sequelize.define('parent', {
    //no attributes
  }, {});
  parent.associate = function(models) {
    parent.belongsTo(models.user,{
    	foreignKey: 'userId',
    	onDelete: 'CASCADE',
    });
    parent.hasMany(models.student, {
      foreignKey: 'parentId',
      as: 'students',
    });
  };
  return parent;
};