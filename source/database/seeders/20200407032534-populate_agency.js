'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Agency', [
      {
        name_agency: 'High Devs',
      }, {
        name_agency: 'RocketSeat'
      }, {
        name_agency: 'You Matter'
      }, {
        name_agency: 'Reduxios'
      }, {
        name_agency: 'Jesters'
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Agency', null, {});
    
  }
};
