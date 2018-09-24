'use strict';
module.exports = (sequelize, DataTypes) => {
  const freetimeslot = sequelize.define('freetimeslot', {
    timeslotfilename: DataTypes.STRING
  }, {});
  freetimeslot.associate = function(models) {
    freetimeslot.belongsTo(models.teacher,{
    	foreignKey: 'teacherId',
    	onDelete: 'CASCADE',
    });
  };
  return freetimeslot;
};