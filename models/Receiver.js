const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const Receiver = sequelize.define('Receiver', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Receiver;
