'use strict';
module.exports = (sequelize, DataTypes) => {
  const teacher = sequelize.define('teacher', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  teacher.associate = function(models) {
<<<<<<< HEAD
   
=======

>>>>>>> 5c6a269b77e032442b9030d71a8b9cd7ea74b8db
  };
  return teacher;
};