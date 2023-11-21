'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Seed Receivers
    await queryInterface.bulkInsert('Receiver', [
      {
        ReceiverFirstName: 'Alice',
        ReceiverLastName: 'Johnson',
        ReceiverEmail: 'alice.johnson@example.com',
        ReceiverPhonenumber: '5551234567',
        ReceiverAddress: '789 Pine St, Village',
      
      },
      {
        ReceiverFirstName: 'Bob',
        ReceiverLastName: 'Williams',
        ReceiverEmail: 'bob.williams@example.com',
        ReceiverPhonenumber: '5559876543',
        ReceiverAddress: '101 Maple St, Hamlet',
       
      },
      // Add more receiver records as needed
    ], {});

    // Seed Senders
    await queryInterface.bulkInsert('Sender', [
      {
        SenderFirstName: 'John',
        SenderLastName: 'Doe',
        SenderEmail: 'john.doe@example.com',
        SenderPhonenumber: '1234567890',
        SenderAddress: '123 Main St, City',
      
      },
      {
        SenderFirstName: 'Jane',
        SenderLastName: 'Smith',
        SenderEmail: 'jane.smith@example.com',
        SenderPhonenumber: '9876543210',
        SenderAddress: '456 Oak St, Town',
     
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
        PackageContent: 'Sample Content 1',
        WorthInKR: 500,
    
      },
      {
        WeightInKG: 1.8,
        LenghtInCM: 25,
        WidthInCM: 15,
        HeightInCM: 8,
        PackageContent: 'Sample Content 2',
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
