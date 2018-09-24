'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  user.associate = function(models) {
    user.hasMany(models.classmember, {
    	foreignKey: 'userId',
    	as: 'classmembers',
    });
    user.hasMany(models.classpost, {
      foreignKey: 'userId',
      as: 'classposts',
    });
    user.hasMany(models.reaction, {
      foreignKey: 'userId',
      as: 'reactions',
    });
    user.hasMany(models.comment, {
      foreignKey: 'userId',
      as: 'comments',
    });
    user.hasMany(models.parent, {
      foreignKey: 'userId',
      as: 'parents',
    });
    user.hasMany(models.student, {
      foreignKey: 'userId',
      as: 'students',
    });
    user.hasMany(models.teacher, {
      foreignKey: 'userId',
      as: 'teachers',
    });
    user.hasMany(models.admin, {
      foreignKey: 'userId',
      as: 'admins',
    });
  };
  return user;
};