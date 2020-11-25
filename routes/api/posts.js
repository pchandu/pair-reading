const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');
const {filterPosts} = require('../../filters/posts_filter');
const { convert2POJO } = require('./routes_util');
const validatePostInput = require('../../validation/posts');

router.get('/', (req, res) => {
    Post.find(filterPosts(req.query))
        .then(posts => convert2POJO(res,posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});
router.post('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePostInput(req.body);
        console.log(req.body)
        console.log(req.body.user_id)
        console.log(errors, isValid)
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newPost = new Post({
            body: req.body.post,
            user: req.body.user_id
        });

        newPost.save().then(post => res.json(post));
    }
);

module.exports = router;