var createError = require('http-errors');
var express = require('express');
//require in mongoose
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const catalogRouter = require('./routes/catalog');

//setup default mongoose connection.
const mongoDB =
  'mongodb+srv://admin:password2@locallib-dev-zh01u.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
const app = express();

//get the default connection
const db = mongoose.connection;

//bind connection to error event to get connection errors
db.on('error', console.error.bind(console, 'MongoDB connect error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//defined routes for our express app.
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter); //adds catalog route to our app.

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
