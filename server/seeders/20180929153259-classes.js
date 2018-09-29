'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('classes', [{
        classname: 'Mathematics',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
    queryInterface.bulkInsert('classes', [{
        classname: 'Programming',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
    queryInterface.bulkInsert('classes', [{
        classname: 'Finance Engineering',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
    queryInterface.bulkInsert('classes', [{
        classname: 'History',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('classes', null, {});
  }
};
