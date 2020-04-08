'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    return await queryInterface.createTable('project', {
      id_project:{
        type: Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement: true
      },
      name_project: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      id_agency: {
        type: Sequelize.INTEGER,
        references: {
          model: 'agency',
          key: 'id_agency'
        },
        allowNull: false
      }
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('project');
    
  }
};
