'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{  //Parent
        username: 'John',
        password: 'parents',
        email: 'parent@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
    queryInterface.bulkInsert('users', [{ //admin
            username: 'Ali',
            password: 'admin',
            email: 'admin@example.com',
            createdAt: new Date(),
            updatedAt: new Date()
          }], {}),
    queryInterface.bulkInsert('users', [{ //student
            username: 'No',
            password: 'student',
            email: 'student@example.com',
            createdAt: new Date(),
            updatedAt: new Date()
          }], {}),
    queryInterface.bulkInsert('users', [{ // Teacher
            username: 'Ching',
            password: 'teacher',
            email: 'teacher@example.com',
            createdAt: new Date(),
            updatedAt: new Date()
          }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
