'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert('project', [
        {
          name_project: 'Little Bird',
          description: 'Projeto para ajudar adolescentes com suas dúvidas sexuais',
          id_agency: 3
        }, {
          name_project: 'Be The Hero',
          description: 'Projeto de doações para ongs',
          id_agency: 2
        }, {
          name_project: 'Test The Sky',
          description: 'Projeto para auxiliar o primeiro vôo',
          id_agency: 5
        }, {
          name_project: 'Reduce Q',
          description: 'Projeto para reduzir a desigualdade',
          id_agency: 4
        }, {
          name_project: 'First Code',
          description: 'Projeto para ensinar programação para as crianças',
          id_agency: 1
        }
      ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkDelete('People', null, {});
  }
};
