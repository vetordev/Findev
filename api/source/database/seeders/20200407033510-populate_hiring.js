'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hiring', [
      {
        id_agency: 1,
        id_dev: 5,
        date_hiring: '2018-08-08',
        position: 'Back-end',
      }, {
        id_agency: 2,
        id_dev: 4,
        date_hiring: '2014-12-08',
        position: 'Back-end',
      }, {
        id_agency: 3,
        id_dev: 3,
        date_hiring: '2016-07-02',
        position: 'Mobile',
      }, {
        id_agency: 4,
        id_dev: 4,
        date_hiring: '2015-11-02',
        position: 'Front-end',
      }, {
        id_agency: 5,
        id_dev: 3,
        date_hiring: '2020-01-15',
        position: 'DBA',
      }

    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hiring', null, {});

  }
};
