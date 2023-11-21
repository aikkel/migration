const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Package = sequelize.define('Package', {
    PackageID: { // replace 'SenderId' with the actual name of your primary key column
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    Content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    WorthInKR: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  }, {
    freezeTableName: true, // This option prevents Sequelize from pluralizing the table name
    timestamps: false, // This option disables the 'createdAt' and 'updatedAt' fields

  });

  return Package;
};