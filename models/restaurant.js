'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.restaurant.hasMany(models.review, { foreignKey: 'restaurantId' });
      models.restaurant.hasMany(models.food, { foreignKey: 'restaurantId' });
      models.restaurant.belongsTo(models.User, { foreignKey: 'userId' });
    }
  };
  restaurant.init({
    name: DataTypes.STRING,
    mon: DataTypes.STRING,
    tue: DataTypes.STRING,
    wed: DataTypes.STRING,
    thu: DataTypes.STRING,
    fri: DataTypes.STRING,
    sat: DataTypes.STRING,
    sun: DataTypes.STRING,
    area: DataTypes.INTEGER,
    firstThree: DataTypes.INTEGER,
    lastFour: DataTypes.INTEGER,
    locPicture: DataTypes.ARRAY(DataTypes.STRING),
    foodPicture: DataTypes.ARRAY(DataTypes.STRING),
    rating: DataTypes.INTEGER,
    description: DataTypes.STRING,
    categories: DataTypes.ARRAY(DataTypes.STRING),
    location: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    price: DataTypes.STRING,
    review: DataTypes.ARRAY(DataTypes.INTEGER),
  }, {
    sequelize,
    modelName: 'restaurant',
  });
  return restaurant;
};