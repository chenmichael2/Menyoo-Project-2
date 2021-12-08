'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.review.belongTo(models.User, { foreignKey: 'userId' });
      models.review.hasMany(models.restaurant, { foreignKey: 'restaurantId' });
    }
  };
  review.init({
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};