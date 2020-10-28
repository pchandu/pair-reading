const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Forum = require('../../models/Forum');
// const validateTweetInput = require('../../validation/forums');

router.get('/', (req, res) => {
    Forum.find()
        .then(forums => res.json(forums))
        .catch(err => res.status(404).json({ noforumsfound: 'No forums found' }));
});
// router.get('/:id/posts', (req, res) => {
//     Forum.findById(req.params.id)
//         .then(forum.posts => res.json(forum.posts))
//         .catch(err => res.status(404).json({ noforumsfound: 'No forums found' }));
// });

module.exports = router;