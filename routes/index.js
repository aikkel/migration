var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.User.findAll().then(users => {
    console.log(users);
    res.render('frontpage', { title: 'Brugere i systemet', users });
  });
});


/* POST route for inserting user data */
router.post('/insertUser', function(req, res, next) {
  // Extract data from the request body
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
  } = req.body;

  // You can add validation or further processing here if needed

  // Create a new user in the database using the User model
  db.User.create({
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
  })
    .then(newUser => {
      // Handle successful insertion
      console.log('User inserted:', newUser);
      res.redirect('/data'); // Redirect to the data page or any other page you prefer
    })
    .catch(error => {
      // Handle insertion error
      console.error('Error inserting user:', error);
      res.status(500).json({ error: 'Failed to insert user' });
    });
});



module.exports = router;
