const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ForumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    // bookclub: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'bookclubs'
    // },
    // post: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'posts'
    // }
});

module.exports = Book = mongoose.model('book', ForumSchema);