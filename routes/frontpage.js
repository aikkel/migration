const express = require('express');
const router = express.Router();
const { Sender, Receiver, Package } = require('../models');

router.post('/frontpage/insertUserInformation', async (req, res) => {
  try {
    // Create new sender
    const sender = await Sender.create({
      SenderFirstName: req.body.SenderFirstName,
      SenderLastName: req.body.SenderLastName,
      SenderEmail: req.body.SenderEmail,
      SenderPhonenumber: req.body.SenderPhoneNumber,
      SenderAddress: req.body.SenderAddress,
    });

    // Create new receiver
    const receiver = await Receiver.create({
      ReceiverFirstName: req.body.ReceiverFirstName,
      ReceiverLastName: req.body.ReceiverLastName,
      ReceiverEmail: req.body.ReceiverEmail,
      ReceiverPhonenumber: req.body.ReceiverPhoneNumber,
      ReceiverAddress: req.body.ReceiverAddress,
    });

    // Create new package
    const package = await Package.create({
      WeightInKG: req.body.PackageWeightInKG,
      LenghtInCM: req.body.PackageLenghtInCM,
      WidthInCM: req.body.PackagewidthInCM, // Fix the field name
      HeightInCM: req.body.PackageHeightInCM,
      PackageContent: req.body.PackageContent,
      WorthInKR: req.body.PackageWorthInKR,
      SenderId: sender.SenderID,
      ReceiverId: receiver.ReceiverID,
    });

    res.json(package);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert user information' });
  }
});

module.exports = router;
