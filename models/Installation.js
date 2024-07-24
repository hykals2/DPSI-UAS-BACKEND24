const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Request = require('./Request');
const User = require('./User');

const Installation = sequelize.define('Installation', {
  installationId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  installationDate: DataTypes.DATE,
  status: DataTypes.STRING,
  requestId: {
    type: DataTypes.INTEGER,
    references: {
      model: Request,
      key: 'requestId'
    }
  },
  technicianId: {
  type: DataTypes.INTEGER,
  references : {
    model: User,
    key: 'UserID'
  }
},
});

module.exports = Installation;
