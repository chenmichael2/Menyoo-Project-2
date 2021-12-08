'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      picture: { 
        type: Sequelize.STRING
      },
      reviewNumber: { 
        type: Sequelize.INTEGER
      },
      contributions: { 
        type: Sequelize.INTEGER
      },
      likedFoods: { 
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      likedRestaurant: { 
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      verify: { 
        type: Sequelize.BOOLEAN
      },
      verifiedRest: { 
        type: Sequelize.INTEGER
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};