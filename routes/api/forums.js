const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Forum = require('../../models/Forum');
const Post = require('../../models/Post');
const validateForumCreate = require('../../validation/forums');

const filterForums = require('../../filters/forums_filter')
const {filterPosts} = require('../../filters/posts_filter')

const { convert2POJO, nestedIndex } = require('../api/routes_util')

router.get('/', (req, res) => {
    Forum.find(filterForums(req.query))
        .then(forums => convert2POJO(res,forums))
        .catch(err => res.status(404).json({ noforumsfound: 'No forums found' }));
});
router.get('/:id', (req, res) => {
    Forum.findById(req.params.id)
        .then(forum => res.json(forum))
        .catch(err => res.status(404).json({ noforumsfound: 'No forums found' }));
});
router.get('/:id/posts', (req, res) => {
    // console.log(req.params.id)
    // console.log(req.query)
    const cnt = { limit: req.query.recentCnt, offset: req.query.offset, sort: {created_at: -1} };
    const cb = (el) => User.findOne({_id: el.user},'username').then(result => {
        // el.user = result.username;
        // console.log(el)
        // console.log(Object.assign({},el._doc,{user:result.username}))
        return Object.assign({},el._doc,{user:{_id: el.user, username:result.username}})
    })
    Forum.findById(req.params.id)
        .then(forum => 
            nestedIndex(Post, forum.posts,filterPosts(req.query), res, cnt, cb)
        )
        .catch(err => res.status(404).json({ noforumsfound: 'No forums found' }));
});

router.post('/new', (req, res) => {
    const { errors, isValid } = validateForumCreate(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    // console.log(req.body);
    Forum.findOne({ title: req.body.title })
        .then(forum => {
            if (forum) {
                // Throw a 400 error if the forum title already exists
                return res.status(400).json({title: "A forum has already registered with this title"})
            } else {
                const newForum = new Forum({
                    title: req.body.title
                })

                const associatedBookClub = BookClub.findOne({_id: req.body.bookclub}).then(
                    bookclub => {
                        newForum.bookclub = bookclub;
                        return newForum;
                    }
                ).then((nf) => nf.save().then(forum => {res.status(200).json({message: "You have successfully made a forum."})
                // newForum.save().then(forum => {res.status(200).json({message: "You have successfully made a forum."})
                }))
            }
        })
})

module.exports = router;
