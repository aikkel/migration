const express = require('express');
const router = express.Router();
const db = require('../models');


/* GET home page. */
router.get('/', function(req, res, next) {
  db.Sender.findAll().then(Sender => {
    console.log(Sender);
    res.render('frontpage', { title: 'Brugere i systemet', Sender });
  });
});


router.post('/insertUser', async (req, res, next) => {
  const {
    senderName, senderEmail, senderPhone, senderAddress,
    receiverName, receiverEmail, receiverPhone, receiverAddress,
    parcelWeight, parcelDimensions, parcelContents, parcelValue,
  } = req.body;

  try {
    const newUser = await db.User.create({
      senderName, senderEmail, senderPhone, senderAddress,
      receiverName, receiverEmail, receiverPhone, receiverAddress,
      parcelWeight, parcelDimensions, parcelContents, parcelValue,
    });

    console.log('User inserted:', newUser);
    res.redirect('/data');
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ error: 'Failed to insert user' });
  }
});

// (unchanged code)
