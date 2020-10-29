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

router.get('/', (req, res) => {
    // console.log(req.query)
    Book.find(filterBooks(req.query))
    .then(books => res.json(books))
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
            User.find({ '_id': { $in: book.users } })
                .then(user => res.json(user))
        )
        .catch(err =>
            res.status(404).json({ nobookfound: 'No book found with that ID' })
        );
});
router.get('/:id/forums', (req,res) => {
    Book.findById(req.params.id)
        .then(book => 
            Forum.find(Object.assign({},
                { '_id': { $in: book.forums } }, filterForums(req.query)
            ))
                .then(forum => res.json(forum))
        )
        .catch(err =>
            res.status(404).json({ nobookfound: 'No book found with that ID' })
        );
});
router.get('/:id/bookclubs', (req,res) => {
    // console.log(req.query)
    Book.findById(req.params.id)
        .then(book => 
            BookClub.find(Object.assign({},
                { '_id': { $in: book.bookclubs } }, filterBookclubs(req.query)
            ))
                .then(bookclub => res.json(bookclub))
        )
        .catch(err =>
            res.status(404).json({ nobookfound: 'No book found with that ID' })
        );
});

module.exports = router;