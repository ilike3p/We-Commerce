// category model

// dependencies 
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// class category
class Category extends Model {}

Category.init(
  {
   //define columns
   id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'Category'
}
);

module.exports = Category;

/* Requirements
Category
id
   Integer
   Doesn't allow null values
   Set as primary key
  Uses auto increment
  cat egory_name
   String
  Doesn't allow null values*/