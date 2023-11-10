var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

var db = require('../models');

var users = [
  {"name": "Oscar",
  "email": "oscar@noob.tk",
  "phone": "123456789"},
  {"name": "Bob",
  "email": "bobo@bob.bob",
  "phone": "987654321"},
  {"name": "Alice",
  "email": "po@pod.dk",
  "phone": "123456789"}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  var users = db.User.findAll().then(users => {
    console.log(users);
    res.render('index', { title: 'Brugere i systemet', users });
  });
});

/* GET frontpage. */
router.get('/frontpage', function(req, res, next) {
  res.render('frontpage', { title: 'Frontpage' });
});

module.exports = router;
