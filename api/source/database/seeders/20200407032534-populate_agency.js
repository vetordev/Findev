'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Agency', [
      {
        name_agency: 'High Devs',
        email: 'highdevs@gmail.com'
      }, {
        name_agency: 'RocketSeat',
        email: 'rocketseat@gmail.com'
      }, {
        name_agency: 'You Matter',
        email: 'youmatter@gmail.com'
      }, {
        name_agency: 'Reduxios',
        email: 'reduxios@gmail.com'
      }, {
        name_agency: 'Jesters',
        email: 'jesters@gmail.com'
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Agency', null, {});
    
  }
};
