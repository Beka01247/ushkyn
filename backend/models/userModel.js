const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  phoneNumber: Number,
  school: String,
  access: Boolean,
  password: String
});

module.exports