const express = require('express');
const bodyParser = require('body-parser');
const { Sender, Receiver } = require('../models');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/data', (req, res) => {
  res.render('databaseSearch', { title: 'Database Search', Sender: [] });
});

router.post('/insertSender', async (req, res) => {
  try {
    const { FirstName, LastName, Email, PhoneNumber, Address } = req.body;
    const newSender = await Sender.create({
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      PhoneNumber: PhoneNumber,
      Address: Address,
    });

    res.json(newSender);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert sender' });
  }
});

router.post('/insertReceiver', async (req, res) => {
  try {
    const { FirstName, LastName, Email, PhoneNumber, Address } = req.body;
    const newReceiver = await Receiver.create({
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      PhoneNumber: PhoneNumber,
      Address: Address,
    });

    res.json(newReceiver);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert receiver' });
  }
});

module.exports = router;

router.get('/search', function(req, res) {
  const id = req.query.id;
  db.Package.findOne({ where: { PackageID: id } })
    .then(package => {
      if (package) {
        res.render('searchResults', { package: package });
      } else {
        res.send('No package found with that ID');
      }
    })
    .catch(err => {
      console.error(err);
      res.send('An error occurred');
    });
});