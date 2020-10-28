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
  preferred_meeting_time: [
  {
    type: String,
    default: 'M'
  },
  {
    type: String,
    default: 'A'
  },
  {
    type: String,
    default: 'E'
  },
  ],
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'books'
  }],
  bookclubs: [{
    type: Schema.Types.ObjectId,
    ref: 'bookclubs'
  }],
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'posts'
  }],

}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);