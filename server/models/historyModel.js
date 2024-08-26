const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  userId: String,
  prompt: String,
  response: Object,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('History', historySchema);
