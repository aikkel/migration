module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('Receiver', {
        ReceiverID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        ReceiverFirstName: { // Updated column name
          type: Sequelize.STRING,
          allowNull: false,
        },
        ReceiverLastName: { // Updated column name
          type: Sequelize.STRING,
          allowNull: false,
        },
        ReceiverEmail: { // Updated column name
          type: Sequelize.STRING,
          allowNull: false,
        },
        ReceiverPhonenumber: { // Updated column name
          type: Sequelize.STRING,
          allowNull: false,
        },
        ReceiverAddress: { // Updated column name
          type: Sequelize.STRING,
          allowNull: false,
        },
      }),
      queryInterface.createTable('Sender', {
        SenderID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        SenderFirstName: { // Updated column name
          type: Sequelize.STRING,
          allowNull: false,
        },
        SenderLastName: { // Updated column name
          type: Sequelize.STRING,
          allowNull: false,
        },
        SenderEmail: { // Updated column name
          type: Sequelize.STRING,
          allowNull: false,
        },
        SenderPhonenumber: { // Updated column name
          type: Sequelize.STRING,
          allowNull: false,
        },
        SenderAddress: { // Updated column name
          type: Sequelize.STRING,
          allowNull: false,
        },
      }),
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
        PackageContent: { // Updated column name
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
    // The down migration is optional; it's used for rollback
    return Promise.all([
      queryInterface.dropTable('Receiver'),
      queryInterface.dropTable('Sender'),
      queryInterface.dropTable('Package'),
    ]);
  },
};