'use strict';
module.exports = (sequelize, DataTypes) => {
  const classmember = sequelize.define('classmember', {
    userId: DataTypes.INTEGER
  }, {});

  classmember.associate = function(models) {
    classmember.belongsTo(models.user,{
    	foreignKey: 'userId',
    	onDelete: 'CASCADE',
    });
    classmember.belongsTo(models.class,{
    	foreignKey: 'classId',
    	onDelete: 'CASCADE',
    });
  };
  return classmember;
};