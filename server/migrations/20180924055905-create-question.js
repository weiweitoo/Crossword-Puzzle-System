'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      questfilename: {
        type: Sequelize.STRING
      },
      teacherId:{
        unique:true,
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:{
          model: 'teachers',
          key: 'id',
          as:'teacherId',
        },
      },
      classId:{
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:{
          model: 'classes',
          key: 'id',
          as:'classId',
        },
      },
      subjectId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:{
          model: 'subjects',
          key: 'id',
          as:'subjectId',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('questions');
  }
};