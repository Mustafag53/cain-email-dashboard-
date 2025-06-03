const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
  email: String,
  sent_date: String,
  status: String,
  responded_date: String
});

module.exports = mongoose.model('Email', EmailSchema);
