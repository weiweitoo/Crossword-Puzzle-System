'use strict';
module.exports = (sequelize, DataTypes) => {
  const class = sequelize.define('class', {
    classname: DataTypes.STRING
  }, {});
  class.associate = function(models) {
    class.hasMany(models.classmember, {
    	foreignKey: 'classId',
    	as: 'classmembers',
    });
    class.hasMany(models.classpost, {
    	foreignKey: 'classId',
    	as: 'classposts',
    });
  };
  return class;
};