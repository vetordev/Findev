'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.createTable('agency', {
        id_agency: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name_agency: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        }
      });
    
  },

  down: async (queryInterface, Sequelize) => {
  
    return await queryInterface.dropTable('agency');
    
  }
};
