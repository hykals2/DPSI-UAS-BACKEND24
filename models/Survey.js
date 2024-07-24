const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Request = require('./Request');
const User = require('./User');

const Survey = sequelize.define('Survey', {
  surveyId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  surveyDate: DataTypes.DATE,
  surveyResult: DataTypes.STRING,
  comments: DataTypes.TEXT,
  requestId: {
    type: DataTypes.INTEGER,
    references: {
      model: Request,
      key: 'requestId'
    }
  },
  tecnicianId: { 
  type: DataTypes.INTEGER,
  references : {
    model: User,
    key: "userId"
  }
}
});

module.exports = Survey;
