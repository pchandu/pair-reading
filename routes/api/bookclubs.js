const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const BookClub = require('../../models/Bookclub');
const Book = require('../../models/Book');
const Forum = require('../../models/Forum');
const User = require('../../models/User');
// const validateTweetInput = require('../../validation/bookclubs');

const filterBookclubs = require('../../filters/bookclubs_filter');
const filterForums = require('../../filters/forums_filter');
const filterBooks = require('../../filters/books_filter');
const { convert2POJO } = require('./routes_util');

router.get('/', (req, res) => {
    BookClub.find(filterBookclubs(req.query))
        .then(bookclubs => convert2POJO(res,bookclubs))
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
            nestedIndex(Book, bookclub.books, filterBookclubs(req.query), res)
        )
        .catch(err => res.status(404).json({ nobooksfound: 'No books found' }));
});
router.get('/:id/forums', (req, res) => {
    BookClub.findById(req.params.id)
        .then(bookclub =>
            nestedIndex(Forum, bookclub.forums, filterForums(req.query), res)
        )
        .catch(err => res.status(404).json({ noforumsfound: 'No forums found' }));
});
router.get('/:id/users', (req, res) => {
    BookClub.findById(req.params.id)
        .then(bookclub =>
            nestedIndex(User, bookclub.users, {}, res)
        )
        .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
});

module.exports = router;