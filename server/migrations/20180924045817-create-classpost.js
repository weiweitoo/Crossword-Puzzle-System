'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('classposts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      posttitle: {
        type: Sequelize.STRING
      },
      postdescription: {
        type: Sequelize.STRING
      },
      postdate: {
        type: Sequelize.DATE
      },
      userId:{
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:{
          model: 'users',
          key: 'id',
          as:'userId',
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
    return queryInterface.dropTable('classposts');
  }
};