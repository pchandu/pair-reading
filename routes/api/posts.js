const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');
const {filterPosts} = require('../../filters/posts_filter');
const { convert2POJO } = require('./routes_util');
// const validateTweetInput = require('../../validation/posts');

router.get('/', (req, res) => {
    Post.find(filterPosts(req.query))
        .then(posts => convert2POJO(res,posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});
router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
    }
);

module.exports = router;