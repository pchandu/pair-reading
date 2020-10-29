const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Book = require('../../models/Book');

const Forum = require('../../models/Forum');
const User = require('../../models/User');
const BookClub = require('../../models/Bookclub');
// const validateTweetInput = require('../../validation/books');

const filterBooks = require('../../filters/books_filter')
const filterForums = require('../../filters/forums_filter')
const filterBookclubs = require('../../filters/bookclubs_filter')

const {convert2POJO, nestedIndex} = require('../api/routes_util')

router.get('/', (req, res) => {
    // console.log(convert2POJO)
    Book.find(filterBooks(req.query))
    .then(books => convert2POJO(res,books))
    .catch(err => res.status(404).json({ nobooksfound: 'No books found' }));
});

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err =>
            res.status(404).json({ nobookfound: 'No book found with that ID' })
        );
});
router.get('/:id/readers', (req,res) => {
    Book.findById(req.params.id)
        .then(book =>
            // User.find({ '_id': { $in: book.users } })
            //     .then(users => convert2POJO(res,users))
            nestedIndex(User, book.users, res)
        )
        .catch(err =>
            res.status(404).json({ nobookfound: 'No book found with that ID' })
        );
});
router.get('/:id/forums', (req,res) => {
    Book.findById(req.params.id)
        .then(book => 
            nestedIndex(Forum, book.forums, res)
        )
        .catch(err =>
            res.status(404).json({ nobookfound: 'No book found with that ID' })
        );
});
router.get('/:id/bookclubs', (req,res) => {
    // console.log(req.query)
    Book.findById(req.params.id)
        .then(book => 
            nestedIndex(BookClub, book.bookclubs, res)
        )
        .catch(err =>
            res.status(404).json({ nobookfound: 'No book found with that ID' })
        );
});

module.exports = router;