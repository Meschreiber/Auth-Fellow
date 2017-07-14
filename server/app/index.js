'use strict';

var app = require('express')();
var path = require('path');
var session = require('express-session');
var User = require('../api/users/user.model');

// "Enhancing" middleware (does not send response, server-side effects only)

app.use(session({
  // this mandatory configuration ensures that session IDs are not predictable
  secret: 'tongiscool', // or whatever you like
  // these options are recommended and reduce session concurrency issues
  resave: false,
  saveUninitialized: false
}));

app.use(require('./logging.middleware'));

app.use(require('./body-parsing.middleware'));


// "Responding" middleware (may send a response back to client)

// app.use('/api', function (req, res, next) {
//   if (!req.session.counter) req.session.counter = 0;
//   console.log('counter', ++req.session.counter);
//   next();
// });

app.use(function (req, res, next) {
  console.log('session', req.session);
  next();
});

app.post('/login', (req, res, next) => {
  User.findOne({where: {
    email: req.body.email,
    password: req.body.password
  }})
  .then(user => {
    if (user) {
      req.session.userId = user.id
      res.status(200).json(user)
    } else {
      res.sendStatus(401)
    }
  })
  .catch(next)
})


app.use('/api', require('../api/api.router'));

var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'browser', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    res.sendFile(indexPath);
  });
});

app.use(require('./statics.middleware'));

// "Error" middleware

app.use(require('../utils/HttpError')(404).middleware());

app.use(require('./error.middleware'));

module.exports = app;
