'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         */

        await queryInterface.bulkInsert('Users', [
            {
                firstName: 'John',
                lastName: "Doe",
                email: "jojo@doe.com",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Karl',
                lastName: "Marx",
                email: "karl@marx.com",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Siptom',
                lastName: "Seed",
                email: "kikes@lol.com",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Hana',
                lastName: "Jbalickova",
                email: "hana.jablickova@gmail.com",
                createdAt: new Date(),
                updatedAt: new Date()
            }], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         *
         */
        await queryInterface.bulkDelete('Users', null, {});
    }
};
