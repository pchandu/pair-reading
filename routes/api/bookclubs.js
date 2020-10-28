const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const BookClub = require('../../models/Bookclub');
// const validateTweetInput = require('../../validation/bookclubs');

router.get('/', (req, res) => {
    BookClub.find()
        .then(bookclubs => res.json(bookclubs))
        .catch(err => res.status(404).json({ nobookclubsfound: 'No bookclubs found' }));
});

module.exports = router;