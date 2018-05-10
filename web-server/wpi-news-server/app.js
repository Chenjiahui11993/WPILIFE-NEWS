var createError = require('http-errors');
var express = require('express');
var path = require('path');
var index = require('./routes/index');
var news = require('./routes/news');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, '../wpi-news-client/build/'));
app.set('view engine', 'jade');
app.use('/static', express.static(path.join(__dirname, '../wpi-news-client/build/static/')));
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use('/', index);
app.use('/news', news);

// TODO: remove this after development is done.

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.status('404');
});
module.exports = app;
