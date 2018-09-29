'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('classmembers', [{
        userId: '1',
        classId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
    queryInterface.bulkInsert('classmembers', [{
       userId: '1',
       classId: '2',
       createdAt: new Date(),
       updatedAt: new Date()
     }], {}),
    queryInterface.bulkInsert('classmembers', [{
       userId: '1',
       classId: '3',
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('classmembers', null, {});
  }
};
