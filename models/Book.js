const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String, 
        required: true
    },
    imagePath: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    genre:{
        type: String
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],
    forums: [{
        type: Schema.Types.ObjectId,
        ref: 'forums'
    }],
    bookclubs: [{
        type: Schema.Types.ObjectId,
        ref: 'bookclubs'
    }]
}, {
    timestamps: true
});

module.exports = Book = mongoose.model('book', BookSchema);