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
      models.restaurant.hasMany(models.review, { foreignKey: 'reviewId' });
      models.restaurant.hasMany(models.food, { foreignKey: 'foodId' });
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
    locPicture: DataTypes.ARRAY(DataTypes.STRING),
    foodPicture: DataTypes.ARRAY(DataTypes.STRING),
    rating: DataTypes.INTEGER,
    description: DataTypes.STRING,
    categories: DataTypes.ARRAY(DataTypes.STRING),
    location: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    price: DataTypes.STRING,
    review: DataTypes.ARRAY(DataTypes.INTEGER),
    reviewId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'restaurant',
  });
  return restaurant;
};