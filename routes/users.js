var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let newusername = "bob";
  const newuser = User.build({ name: newusername });
  newuser.save();
  res.send('respond with a resource');
});

module.exports = router;