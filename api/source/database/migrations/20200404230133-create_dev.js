'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('developer', {
       id_dev: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true,
       },
       name_dev: {
         type: Sequelize.STRING,
         allowNull: false
       },
       born_in: {
         type: Sequelize.DATEONLY,
         allowNull: false,
       },
       skill: {
         type: Sequelize.STRING,
         allowNull: false
       },
       github: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isUrl: true
        }
        
       }
    });
    
  },

  down: async (queryInterface, Sequelize) => {    
      return await queryInterface.dropTable('dev');
  }
};
