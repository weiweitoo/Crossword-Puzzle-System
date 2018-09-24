'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    content: DataTypes.STRING
  }, {});
  admin.associate = function(models) {
    admin.belongsTo(models.user,{
    	foreignKey: 'userId',
    	onDelete: 'CASCADE',
    });
  };
  return admin;
};