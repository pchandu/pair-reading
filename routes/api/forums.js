const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Forum = require('../../models/Forum');
const Post = require('../../models/Post');
// const validateTweetInput = require('../../validation/forums');

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
    const cnt = { limit: req.query.recentCnt, offset: req.query.offset };
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

module.exports = router;