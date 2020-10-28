const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    // reader: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users'
    // },
    // forum: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'forums'
    // },
    // bookclub: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'bookclubs'
    // }
});

module.exports = Book = mongoose.model('book', BookSchema);