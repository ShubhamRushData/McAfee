const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  email: String,
  password: String, // hashed
});

module.exports = mongoose.model('Admin', AdminSchema);
