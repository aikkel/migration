'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Seed Receivers
    await queryInterface.bulkInsert('Receiver', [
      {
        FirstName: 'Alice',
        LastName: 'Johnson',
        Email: 'alice.johnson@example.com',
        Phonenumber: '5551234567',
        Address: '789 Pine St, Village',
      
      },
      {
        FirstName: 'Bob',
        LastName: 'Williams',
        Email: 'bob.williams@example.com',
        Phonenumber: '5559876543',
        Address: '101 Maple St, Hamlet',
       
      },
      // Add more receiver records as needed
    ], {});

    // Seed Senders
    await queryInterface.bulkInsert('Sender', [
      {
        FirstName: 'John',
        LastName: 'Doe',
        Email: 'john.doe@example.com',
        Phonenumber: '1234567890',
        Address: '123 Main St, City',
      
      },
      {
        FirstName: 'Jane',
        LastName: 'Smith',
        Email: 'jane.smith@example.com',
        Phonenumber: '9876543210',
        Address: '456 Oak St, Town',
     
      },
      // Add more sender records as needed
    ], {});

    // Seed Packages
    await queryInterface.bulkInsert('Package', [
      {
        WeightInKG: 2.5,
        LenghtInCM: 30,
        WidthInCM: 20,
        HeightInCM: 10,
        Content: 'Sample Content 1',
        WorthInKR: 500,
    
      },
      {
        WeightInKG: 1.8,
        LenghtInCM: 25,
        WidthInCM: 15,
        HeightInCM: 8,
        Content: 'Sample Content 2',
        WorthInKR: 350,
    
      },
      // Add more package records as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove Receivers
    await queryInterface.bulkDelete('Receiver', null, {});

    // Remove Senders
    await queryInterface.bulkDelete('Sender', null, {});

    // Remove Packages
    await queryInterface.bulkDelete('Package', null, {});
  }
};
