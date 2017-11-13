'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      username: 'admin',
      password: '$2a$10$u8wT78SvopVJ52DUBnoQAutuhvtMme3r30O7jhe7k9VuMldqr1hlK',
      isAdmin: true,
      first_name: 'admin',
      last_name: 'admin',
      email: 'adm@in.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
