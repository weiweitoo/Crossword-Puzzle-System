'use strict';
module.exports = (sequelize, DataTypes) => {
  const freetimeslots = sequelize.define('freetimeslots', {
    timeslotfilename: DataTypes.STRING
  }, {});
  freetimeslots.associate = function(models) {
    freetimeslots.belongsTo(models.teachers,{
    	foreignKey: 'teacherId',
    	onDelete: 'CASCADE',
    });
  };
  return freetimeslots;
};