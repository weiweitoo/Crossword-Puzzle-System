'use strict';
module.exports = (sequelize, DataTypes) => {
  const classpost = sequelize.define('classpost', {
    posttitle: DataTypes.STRING,
    postdescription: DataTypes.STRING,
    postdate: DataTypes.DATE
  }, {});
  classpost.associate = function(models) {
    classpost.belongsTo(models.user,{
    	foreignKey: 'userId',
    	onDelete: 'CASCADE',
    });
    classpost.belongsTo(models.class,{
    	foreignKey: 'classId',
    	onDelete: 'CASCADE',
    });
    classpost.hasMany(models.reaction, {
      unique:true,
    	foreignKey: 'classpostId',
    	as: 'reactions',
    });
    classpost.hasMany(models.comment, {
    	foreignKey: 'classpostId',
    	as: 'comments',
    });
  };
  return classpost;
};