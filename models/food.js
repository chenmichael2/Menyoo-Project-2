'use strict';
const { datatype } = require('faker');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.food.belongsToMany(models.User, { through: 'userfood' });
      models.food.belongsTo(models.restaurant, { foreignKey: 'restaurantId' });
    }
  };
  food.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    meal: DataTypes.STRING,
    foodType: DataTypes.STRING,
    price: DataTypes.FLOAT,
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'food',
  });
  return food;
};