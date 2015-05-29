'use strict';

var mongoose = require('mongoose');

module.exports = function() {
  // Use Mongoose to connect to MongoDB
  var db = mongoose.connect('mongodb://localhost/test-chirp');

  // Load the application models
  require('../models/user');
  require('../models/post');

  // Return the Mongoose connection instance
  return db;
};