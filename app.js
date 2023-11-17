var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var Sender = require('models/Sender.js'); // Import the Sender model
var Receiver = require('models/Receiver.js'); // Import the Receiver model

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Handle the form submission and insert data into the Sender table
app.post('/insertSender', async (req, res) => {
  try {
    const { FirstName, LastName, Email, Phonenumber, Address } = req.body;

    const newSender = await Sender.create({
      firstName: FirstName,
      lastName: LastName,
      email: Email,
      phoneNumber: Phonenumber,
      address: Address,
    });

    res.json(newSender);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert sender' });
  }
});

// Handle the form submission and insert data into the Receiver table
app.post('/insertReceiver', async (req, res) => {
  try {
    const { FirstName, LastName, Email, Phonenumber, Address } = req.body;

    const newReceiver = await Receiver.create({
      firstName: FirstName,
      lastName: LastName,
      email: Email,
      phoneNumber: Phonenumber,
      address: Address,
    });

    res.json(newReceiver);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert receiver' });
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
