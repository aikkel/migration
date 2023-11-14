const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db'); // Import your database configuration
const User = require('./models/user'); // Import the User model
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

// Render the form to input data
app.get('/data', (req, res) => {
  res.render('databaseSearch', { title: 'Database Search', users: [] });
});
// Handle the form submission and insert data into the User table
app.post('/insertUser', async (req, res) => {
  try {
    const {
      senderName,
      senderEmail,
      senderPhone,
      senderAddress,
      receiverName,
      receiverEmail,
      receiverPhone,
      receiverAddress,
      parcelWeight,
      parcelDimensions,
      parcelContents,
      parcelValue,
    } = req.body; // Extract data from the form fields

    const newUser = await User.create({
      senderName,
      senderEmail,
      senderPhone,
      senderAddress,
      receiverName,
      receiverEmail,
      receiverPhone,
      receiverAddress,
      parcelWeight,
      parcelDimensions,
      parcelContents,
      parcelValue,
    });

    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert user' });
  }
});
