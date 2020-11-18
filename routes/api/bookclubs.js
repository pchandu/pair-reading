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
const { convert2POJO, nestedIndex } = require('./routes_util');

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
    // console.log(req.params.id)
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

router.post('/createBookClub',(req,res) => {
    if (req.body.title === '' || req.body.title === undefined){
        return res.status(400).json({msg: "You need a valid title"})
    }

    BookClub.findOne({title: req.body.title})
        .then( bookClub => {
            if(bookClub){
                return res.status(400).json({bookclub: "A bookclub by that name already exists, please choose a new name"})
            }else {
                const newBookClub = new BookClub({
                    title: req.body.title,
                    creator: req.body.creator,
                    users: [req.body.creator]
                })
                
                newBookClub.save()
                    .then(
                    User.findOne({_id:req.body.creator})
                    // Creates bookclub based on creator.
                    .then( user =>{ 
                        user.bookclubs.push(newBookClub._id)
                        user.save()
                    })
                    .then(
                        // Finds invitee and invites to bookclub
                        User.findOne({_id: req.body.invitee})
                        .then( user => {
                        user.invites.push(newBookClub._id)
                        user.save()
                        res.status(200).json({msg: "Successfully Created BookClub!", newBookClub})
                    })
                    ))
            }
        })

})

router.delete('/deleteBookClub', (req,res) => {
    BookClub.findOne({title: req.body.title })
        .then( bookClub => {
            if(bookClub){
                // Have to send back creator as a string
                if(JSON.stringify(bookClub.creator) === `"${req.body.creator}"`){
                    let stripped_string = req.body.creator.replace(/\"/g, "") 
                    User.findOne({_id: stripped_string})
                        .then( user => { 
                            user.bookclubs.forEach((bookClubId,idx) => {
                                if(bookClub.id === bookClubId){
                                    user.bookclubs.splice(idx, 1)
                                }
                            })
                        })
                        .then(
                    bookClub.delete()
                        .then( res.status(200).json({msg: "Succesfully deleted bookclub"}))
                    )
                } else {
                    return res.status(400).json({msg: "Invalid Permissions to delete bookclub."})
                }
            } else {
                return res.status(400).json({msg: "Bookclub doesnt exist"})
            }
        })
}) 

module.exports = router;