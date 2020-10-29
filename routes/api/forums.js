const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Forum = require('../../models/Forum');
const Post = require('../../models/Post');
// const validateTweetInput = require('../../validation/forums');

router.get('/', (req, res) => {
    Forum.find()
        .then(forums => res.json(forums))
        .catch(err => res.status(404).json({ noforumsfound: 'No forums found' }));
});
router.get('/:id', (req, res) => {
    Forum.findById(req.params.id)
        .then(forum => res.json(forum))
        .catch(err => res.status(404).json({ noforumsfound: 'No forums found' }));
});
router.get('/:id/posts', (req, res) => {
    Forum.findById(req.params.id)
        .then(forum => 
            Post.find({'_id': {$in: forum.posts}})
            .then(post => res.json(post))
        )
        .catch(err => res.status(404).json({ noforumsfound: 'No forums found' }));
});

module.exports = router;