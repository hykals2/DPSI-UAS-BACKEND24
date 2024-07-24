const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Property = sequelize.define('Property', {
  propertyId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  address: DataTypes.STRING,
  roofArea: DataTypes.DOUBLE,
  roofType: DataTypes.STRING,
  orientation: DataTypes.STRING,
  slope: DataTypes.DOUBLE,
  buildingHeight: DataTypes.INTEGER,
  constructionYear: DataTypes.INTEGER,
  averageMonthlyConsumption: DataTypes.DOUBLE,
  averageMonthlyBill: DataTypes.DOUBLE,
  currentEnergySource: DataTypes.STRING,
  futureEnergyPlans: DataTypes.TEXT,
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'userId'
    }
  }
});

module.exports = Property;
