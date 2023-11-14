'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('Package', {
        PackageID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        WeightInKG: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        LenghtInCM: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        WidthInCM: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        HeightInCM: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        Content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        WorthInKR: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      }),
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable('Package'),
      /**
       * Add reverting commands here.
       *
       * Example:
       * await queryInterface.createTable('Package', { ... });
       */
    ]);
  }
};
