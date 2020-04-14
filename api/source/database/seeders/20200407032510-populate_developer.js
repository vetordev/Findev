'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.bulkInsert('Developer', [
      {
        name_dev: 'John Doe',
        born_in: '2000-04-03',
        skill: 'Back-end',
        github: 'github.com/vetordev'
      },{
        name_dev: 'Barbara Abi',
        born_in: '2003-04-03',
        skill: 'DBA',
        github: 'github.com/vetordev'
      }, {
        name_dev: 'Carls Sagan',
        born_in: '1990-09-03',
        skill: 'Mobile',
        github: 'github.com/vetordev'
      }, {
        name_dev: 'Mark Spencer',
        born_in: '1998-04-03',
        skill: 'Front-end',
        github: 'github.com/vetordev'
      }, {
        name_dev: 'Brendam Eich',
        born_in: '2002-04-03',
        skill: 'Back-end',
        github: 'github.com/vetordev'
      }
    ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Developer', null, {});
  
  }
};
