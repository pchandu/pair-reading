const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');
const {filterPosts} = require('../../filters/posts_filter');
const { convert2POJO, getUsername } = require('./routes_util');
const validatePostInput = require('../../validation/posts');

router.get('/', (req, res) => {
    Post.find(filterPosts(req.query))
        .then(posts => convert2POJO(res,posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});
router.delete('/:id', (req,res) => {
    console.log("FLAAGG")
    Post.findById(req.params.id)
        .then(post => {
            if (post) post.delete().then(res.status(200).json({ msg: "Succesfully deleted bookclub" }));
            else 
            return res.status(400).json({ msg: "Invalid Permissions to delete post." })
        })
})
router.post('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePostInput(req.body);
        console.log(req.body)
        console.log(req.body.user_id)
        console.log(errors, isValid)
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newPost = new Post({
            body: req.body.post,
            user: req.body.user_id,
            forum: req.body.forum_id
        });
        const associatedForum = Forum.findOne({ _id: req.body.forum_id }).then(
            forum => {
                newPost.forum = forum; //! Forum has a bookclub
                //! Bookclub needs the new forum
                forum.posts.push(newPost);
                forum.save();
                return newPost;
            }
        ).then((np) => np.save().then(post => {
            // const cb = (el) => User.findOne({ _id: el.user }, 'username').then(result => {
            //     return Object.assign({}, el._doc, { user: { _id: el.user, username: result.username } })
            // })            
            getUsername(post).then(el => res.json(el))
        }))
    }
);

module.exports = router;