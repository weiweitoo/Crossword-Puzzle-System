'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('classes', [{
        classname: 'Mathematics',
        teacherId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
    queryInterface.bulkInsert('classes', [{
        classname: 'Programming',
        teacherId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
    queryInterface.bulkInsert('classes', [{
        classname: 'Finance Engineering',
        teacherId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
    queryInterface.bulkInsert('classes', [{
        classname: 'History',
        teacherId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('classes', null, {});
  }
};
