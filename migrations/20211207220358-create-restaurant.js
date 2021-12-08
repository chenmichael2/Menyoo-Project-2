'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      mon: {
        type: Sequelize.STRING,
      },
      tue: {
        type: Sequelize.STRING,
      },
      wed: {
        type: Sequelize.STRING,
      },
      thu: {
        type: Sequelize.STRING,
      },
      fri: {
        type: Sequelize.STRING,
      },
      sat: {
        type: Sequelize.STRING,
      },
      sun: {
        type: Sequelize.STRING,
      },
      locPicture: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      foodPicture: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      rating: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      categories: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      location: {
        type: Sequelize.STRING
      },
      verified: {
        type: Sequelize.BOOLEAN
      },
      price: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      userId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('restaurants');
  }
};