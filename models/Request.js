const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Property = require('./Property');

const Request = sequelize.define('Request', {
  requestId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  requestDate: DataTypes.DATE,
  status: DataTypes.STRING,
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'userId'
    }
  },
  propertyId: {
    type: DataTypes.INTEGER,
    references: {
      model: Property,
      key: 'propertyId'
    }
  }
});

module.exports = Request;
