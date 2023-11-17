const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Sender = sequelize.define('Sender', {
    SenderID: { // replace 'SenderId' with the actual name of your primary key column
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phonenumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true, // This option prevents Sequelize from pluralizing the table name
    timestamps: false, // This option disables the 'createdAt' and 'updatedAt' fields

  });

  return Sender;
};