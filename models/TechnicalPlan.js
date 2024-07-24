const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Request = require('./Request');

const TechnicalPlan = sequelize.define('TechnicalPlan', {
  planId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  technicalDetails: DataTypes.TEXT,
  estimatedCost: DataTypes.DOUBLE,
  planDate: DataTypes.DATE,
  requestId: {
    type: DataTypes.INTEGER,
    references: {
      model: Request,
      key: 'requestId'
    }
  }
});

module.exports = TechnicalPlan;
