const express = require('express');
const app = express();


// Handle the form submission and insert data into the User table
app.post('/insertSender', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, address } = req.body;
    const newSender = await Sender.create({ firstName, lastName, email, phoneNumber, address });
    res.json(newSender);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert sender' });
  }
});

app.listen(3000, () => {
console.log('Server is running on port 3000');
});
