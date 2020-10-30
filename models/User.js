const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  preferred_meeting_time: {
    M:{
      type: Boolean,
      default: true
    },
    A:{
      type: Boolean,
      default: true
    },
    E:{
      type: Boolean,
      default: true
    },
  },
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