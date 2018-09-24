'use strict';
module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define('question', {
    questfilename: DataTypes.STRING
  }, {});
  question.associate = function(models) {
    question.belongsTo(models.teacher,{
    	foreignKey: 'teacherId',
    	onDelete: 'CASCADE',
    });
    question.belongsTo(models.class,{
    	foreignKey: 'classId',
    	onDelete: 'CASCADE',
    });
    question.belongsTo(models.class,{
    	foreignKey: 'classId',
    	onDelete: 'CASCADE',
    });
    question.belongsTo(models.subject,{
    	foreignKey: 'subjectId',
    	onDelete: 'CASCADE',
    });
  };
  return question;
};