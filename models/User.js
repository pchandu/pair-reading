const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  preferred_meeting_time: {
    type: String,
    required: true,
    default: 'all'
  }
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);