'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('subjects', [{
      subjectname: 'Deep Learning with Python',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {}),
    queryInterface.bulkInsert('subjects', [{
      subjectname: 'React Native with Firebase',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('subjects', null, {});
  }
};
