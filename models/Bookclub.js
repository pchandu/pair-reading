const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookClubSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'books'
    },
    forum: {
        type: Schema.Types.ObjectId,
        ref: 'forums'
    }
});

module.exports = BookClub = mongoose.model('bookclub', BookClubSchema);