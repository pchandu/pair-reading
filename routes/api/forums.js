const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Forum = require('../../models/forum');
// const validateTweetInput = require('../../validation/forums');

router.get('/', (req, res) => {
    Forum.find()
        .then(forums => res.json(forums))
        .catch(err => res.status(404).json({ noforumsfound: 'No forums found' }));
});

module.exports = router;