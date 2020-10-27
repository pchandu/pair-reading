const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    body: {
        type: String,
        required: true
    }
});

module.exports = Book = mongoose.model('book', PostSchema);