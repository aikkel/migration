const express = require('express');
const router = express.Router();
const { Sender } = require('../models');

router.post('/frontpage', async (req, res) => {
  try {
    const { FirstName, LastName, Email, PhoneNumber, Address } = req.body;
    const newSender = await Sender.create({ FirstName, LastName, Email, PhoneNumber, Address });
    res.json(newSender);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert sender' });
  }
});



module.exports = router;