const express = require('express');
const indexRouter = express.Router();
const { Sender, Receiver, Package } = require('../models');

/* GET home page. */
indexRouter.get('/', async (req, res, next) => {
  try {
    const senders = await Sender.findAll(); // renamed from 'Sender' to 'senders'
    const receivers = await Receiver.findAll(); // renamed from 'Sender' to 'senders'
    const packages = await Package.findAll(); // renamed from 'Sender' to 'senders'
    console.log(senders, receivers, packages); // updated to use 'senders'
    res.render('frontpage', { title: 'Brugere i systemet', senders, receivers, packages }); // updated to use 'senders'
  } catch (error) {
    console.error('Error fetching senders:', error);
    res.status(500).json({ error: 'Failed to fetch senders' });
  }
});

indexRouter.post('/insertSender', async (req, res, next) => {
  const {
    senderName, senderEmail, senderPhone, senderAddress,
    receiverName, receiverEmail, receiverPhone, receiverAddress,
    parcelWeight, parcelDimensions, parcelContents, parcelValue,
  } = req.body;

  try {
    const newSender = await Sender.create({
      FirstName: senderName,
      Email: senderEmail,
      Phonenumber: senderPhone,
      Address: senderAddress,
    });

    const newReceiver = await Receiver.create({
      FirstName: receiverName,
      Email: receiverEmail,
      Phonenumber: receiverPhone,
      Address: receiverAddress,
    });

    const newPackage = await Package.create({
      WeightInKG: parcelWeight,
      LenghtInCM: parcelDimensions.length,
      WidthInCM: parcelDimensions.width,
      HeightInCM: parcelDimensions.height,
      Content: parcelContents,
      WorthInKR: parcelValue,
    });

    console.log('User inserted:', newSender, newReceiver, newPackage);
    res.redirect('/data');
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ error: 'Failed to insert user' });
  }
});

indexRouter.get('/database', async (req, res, next) => {
  try {
    const senders = await Sender.findAll(); // renamed from 'Sender' to 'senders'
    const receivers = await Receiver.findAll(); // renamed from 'Sender' to 'senders'
    const packages = await Package.findAll(); // renamed from 'Sender' to 'senders'
    console.log(senders, receivers, packages); // updated to use 'senders'
    res.render('databaseSearch', { title: 'Brugere i systemet', senders, receivers, packages }); // updated to use 'senders'
  } catch (error) {
    console.error('Error fetching senders:', error);
    res.status(500).json({ error: 'Failed to fetch senders' });
  }
});

module.exports = indexRouter;