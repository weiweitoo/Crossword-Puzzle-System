'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      appointmenttitle: {
        type: Sequelize.STRING
      },
      appointmentdesc: {
        type: Sequelize.STRING
      },
      appointmentdate: {
        type: Sequelize.STRING
      },
      teacherId:{
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:{
          model: 'teachers',
          key: 'id',
          as:'teacherId',
        },
      },
      studentId:{
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:{
          model: 'students',
          key: 'id',
          as:'studentId',
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
    return queryInterface.dropTable('appointments');
  }
};