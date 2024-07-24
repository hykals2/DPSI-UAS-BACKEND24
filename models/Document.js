const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Document = sequelize.define('Document', {
  documentId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  documentType: DataTypes.STRING,
  documentPath: DataTypes.STRING,
  status: DataTypes.STRING,
  uploadDate: DataTypes.DATE,
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'userId'
    }
  }
});

module.exports = Document;
