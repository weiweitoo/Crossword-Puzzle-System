'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('questions', [{
      classId: '1',
      questfilename: "iamfake.csv",
      teacherId: '4',
      subjectId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {}),
    queryInterface.bulkInsert('questions', [{
      classId: '2',
      questfilename: "iamfakde.csv",
      teacherId: '4',
      subjectId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('questions', null, {});
  }
};
