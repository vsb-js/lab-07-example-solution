'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Cars', [
      {
        name: 'Blue Octavia',
        brand: "Skoda",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Slow car',
        brand: "Tesla",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Blah I dont know cars',
        brand: "No brand",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Whatever',
        brand: "yep",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Cars', null, {});

  }
};
