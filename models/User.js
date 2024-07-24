const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  address: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.ENUM('customer', 'employee', 'admin')
});

module.exports = User;
