const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const Sender = require('./Sender.js'); // Corrected path
const Receiver = require('./Receiver.js'); // Corrected path
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

// Render the form to input data
app.get('/data', (req, res) => {
  res.render('databaseSearch', { title: 'Database Search', Sender: [] });
});

// Handle the form submission and insert data into the User table for sender
app.post('/insertSender', async (req, res) => {
  try {
    const { FirstName, LastName, Email, Phonenumber, Address } = req.body;
    const newSender = await Sender.create({
      firstName: FirstName,
      lastName: LastName,
      email: Email,
      phoneNumber: Phonenumber,
      address: Address,
    });

    res.json(newSender);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert sender' });
  }
});

// Handle the form submission and insert data into the User table for receiver
app.post('/insertReceiver', async (req, res) => {
  try {
    const { FirstName, LastName, Email, Phonenumber, Address } = req.body;
    const newReceiver = await Receiver.create({
      firstName: FirstName,
      lastName: LastName,
      email: Email,
      phoneNumber: Phonenumber,
      address: Address,
    });

    res.json(newReceiver);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert receiver' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
