const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ForumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    bookclub: {
        type: Schema.Types.ObjectId,
        ref: 'bookclubs'
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'books'
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'posts'
    }]
    
}, {
    timestamps: true
});

module.exports = Forum = mongoose.model('forum', ForumSchema);