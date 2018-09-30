'use strict';
<<<<<<< HEAD
=======
const Parents = require('./parents.js').parents;

>>>>>>> 5c6a269b77e032442b9030d71a8b9cd7ea74b8db
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
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

<<<<<<< HEAD
  users.associate = function(models) {
  };
=======
  // users.hasOne(Parents);

>>>>>>> 5c6a269b77e032442b9030d71a8b9cd7ea74b8db
  return users;
};