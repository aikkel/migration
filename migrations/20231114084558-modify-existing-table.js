// In the generated migration file
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User');
  },

  down: (queryInterface, Sequelize) => {
    // The down migration is optional; it's used for rollback
    // If you want to recreate the table on rollback, you can define it here
    // Example: queryInterface.createTable('YourExistingTableName', { ... });
  },
};