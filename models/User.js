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
    type: String
  },
  preferred_books: {
    type: Schema.Types.ObjectId,
    ref: 'books'
  },
  // bookclub: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'bookclubs'
  // },
  // post: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'posts'
  // },
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);