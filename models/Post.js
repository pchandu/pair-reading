const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    forum: {
        type: Schema.Types.ObjectId,
        ref: 'forums'
    },
});

module.exports = Post = mongoose.model('post', PostSchema);