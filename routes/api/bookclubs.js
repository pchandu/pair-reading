const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const BookClub = require('../../models/Bookclub');
const Book = require('../../models/Book');
const Forum = require('../../models/Forum');
const Post = require('../../models/Post');
// const validateTweetInput = require('../../validation/bookclubs');

router.get('/', (req, res) => {
    BookClub.find()
        .then(bookclubs => res.json(bookclubs))
        .catch(err => res.status(404).json({ nobookclubsfound: 'No bookclubs found' }));
});
router.get('/:id', (req, res) => {
    BookClub.findById(req.params.id)
        .then(bookclub => res.json(bookclub))
        .catch(err => res.status(404).json({ nobooksfound: 'No books found' }));
});
router.get('/:id/books', (req, res) => {
    BookClub.findById(req.params.id)
        .then(bookclub =>
            Book.find({ '_id': { $in: bookclub.books } })
                .then(book => res.json(book))
        )
        .catch(err => res.status(404).json({ nobooksfound: 'No books found' }));
});
router.get('/:id/forums', (req, res) => {
    BookClub.findById(req.params.id)
        .then(bookclub =>
            Forum.find({ '_id': { $in: bookclub.forums } })
                .then(forum => res.json(forum))
        )
        .catch(err => res.status(404).json({ noforumsfound: 'No forums found' }));
});
router.get('/:id/users', (req, res) => {
    BookClub.findById(req.params.id)
        .then(bookclub =>
            User.find({ '_id': { $in: bookclub.users } })
                .then(user => res.json(user))
        )
        .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
});

module.exports = router;