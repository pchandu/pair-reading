const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookClubSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'books'
    }],
    forums: [{
        type: Schema.Types.ObjectId,
        ref: 'forums'
    }],
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }]
});

module.exports = BookClub = mongoose.model('bookclub', BookClubSchema);