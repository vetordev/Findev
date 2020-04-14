'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('hiring', {
       id_hiring: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true
       },
       id_dev: {
          type: Sequelize.INTEGER,
          references: {
            model: 'developer',
            key: 'id_dev'
          },
          allowNull: false
       },
       id_agency: {
         type: Sequelize.INTEGER,
         references: {
           model: 'agency',
           key: 'id_agency'
         },
         allowNull: false
       },
       position: {
         type: Sequelize.STRING,
         allowNull: false
       },
       date_hiring: {
         type: Sequelize.DATEONLY,
         allowNull: false
       },
       date_resignation: {
         type: Sequelize.INTEGER,
         defaultValue: '9999-01-01'
       }
         
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('users');
    
  }
};
