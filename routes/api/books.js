const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Book = require('../../models/Book');
const Forum = require('../../models/Forum');
// const validateTweetInput = require('../../validation/books');

router.get('/', (req, res) => {
    Book.find()
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
        .then(book => res.json(book.reader))
        .catch(err =>
            res.status(404).json({ nobookfound: 'No book found with that ID' })
        );
});
router.get('/:id/forums', (req,res) => {
    Book.findById(req.params.id)
        .then(book => 
            Forum.find({ '_id': { $in: book.forums } })
                .then(forum => res.json(forum))
        )
        .catch(err =>
            res.status(404).json({ nobookfound: 'No book found with that ID' })
        );
});
router.get('/:id/bookclubs', (req,res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book.bookclub))
        .catch(err =>
            res.status(404).json({ nobookfound: 'No book found with that ID' })
        );
});

module.exports = router;