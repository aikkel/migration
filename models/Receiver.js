const { DataTypes } = require('sequelize');
const crypto = require('crypto');

// Function to create a unique order number
function createOrderNumber() {
  const salt = crypto.randomBytes(16).toString('hex');
  const uniqueBytes = crypto.randomBytes(4);
  const uniqueIdentifier = parseInt(uniqueBytes.toString('hex'), 16);
  const saltedData = `${salt}-${uniqueIdentifier}`;
  const hash = crypto.createHash('sha256').update(saltedData).digest('hex');
  return `ORD-${hash.slice(0, 8).toUpperCase()}`;
}

module.exports = (sequelize) => {
  const Receiver = sequelize.define('Receiver', {
    ReceiverID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createOrderNumber(),
      allowNull: false,
      autoIncrement: false,
    },
    ReceiverFirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ReceiverLastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ReceiverEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ReceiverPhonenumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ReceiverAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return Receiver;
};
