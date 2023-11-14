module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('Receiver', {
        ReceiverID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        FirstName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        LastName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Phonenumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Address: {
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
        FirstName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        LastName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Phonenumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Address: {
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
    // The down migration is optional; it's used for rollback
    return Promise.all([
      queryInterface.dropTable('Receiver'),
      queryInterface.dropTable('Sender'),
      queryInterface.dropTable('Package'),
    ]);
  },
};


