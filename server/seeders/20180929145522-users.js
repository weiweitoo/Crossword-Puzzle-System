'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        username: 'John',
        password: 'Doe',
        email: 'demo@demo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
    queryInterface.bulkInsert('users', [{
            username: 'Ali',
            password: 'Dool',
            email: 'demo@demo.com',
            createdAt: new Date(),
            updatedAt: new Date()
          }], {}),
    queryInterface.bulkInsert('users', [{
            username: 'No',
            password: 'Hobita',
            email: 'demo@demo.com',
            createdAt: new Date(),
            updatedAt: new Date()
          }], {}),
    queryInterface.bulkInsert('users', [{
            username: 'Ching',
            password: 'Tajam',
            email: 'demo@demo.com',
            createdAt: new Date(),
            updatedAt: new Date()
          }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
