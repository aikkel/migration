'use strict';

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

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Receiver Table Changes
    await queryInterface.changeColumn('Receiver', 'ReceiverID', {
      type: Sequelize.STRING,
      primaryKey: true,
      defaultValue: () => createOrderNumber(),
      allowNull: false,
      autoIncrement: false,
    });

    // Sender Table Changes
    await queryInterface.changeColumn('Sender', 'SenderID', {
      type: Sequelize.STRING,
      primaryKey: true,
      defaultValue: () => createOrderNumber(),
      allowNull: false,
      autoIncrement: false,
    });

    // Package Table Changes
    await queryInterface.changeColumn('Package', 'PackageID', {
      type: Sequelize.STRING,
      primaryKey: true,
      defaultValue: () => createOrderNumber(),
      allowNull: false,
      autoIncrement: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revert changes for Receiver Table
    await queryInterface.changeColumn('Receiver', 'ReceiverID', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    });

    // Revert changes for Sender Table
    await queryInterface.changeColumn('Sender', 'SenderID', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    });

    // Revert changes for Package Table
    await queryInterface.changeColumn('Package', 'PackageID', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    });
  },
};
