'use strict';
const Users = require('./users.js').users;

module.exports = (sequelize, DataTypes) => {
  const parents = sequelize.define('parents', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  // parents.belongsTo(Users, {
  //   through: 'userId',
  //   onDelete: 'CASCADE',  
  // });
  // parents.associate = function(models) {
  //    parents.belongsTo(Users, {
  //  	 foreignKey: 'userId',
  //    onDelete: 'CASCADE',
  //  });
  // };
  return parents;
};