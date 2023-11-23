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
  const Package = sequelize.define('Package', {
    PackageID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createOrderNumber(),
      allowNull: false,
      autoIncrement: false,
    },
    WeightInKG: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    LenghtInCM: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    WidthInCM: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    HeightInCM: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PackageContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    WorthInKR: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return Package;
};
