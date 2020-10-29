const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys')
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const passport = require('passport')


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.patch('/updateUser', (req, res) => {
  User.findById(req.body.user)
    .then(user => {
      if (user) {
        user.books = req.body.preferred_books;
        // user.preferred_meeting_time = req.body.preferred_meeting_times;
        user.save()
          .then( (user) => res.json(user) )
      } else {
        return res.json({ msg: "Something went wrong, captain."})
      }
    })
})

router.post('/register', (req, res) => {
 
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

    // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({email: "A user has already registered with this address"})
      } else {
        // Otherwise create a new user
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({email})
    .then(user => {
      if (!user) {
        return res.status(404).json({email: 'This user does not exist'});
      }

    bcrypt.compare(password, user.password)
        .then(isMatch => {
        if (isMatch) {
        const payload = {id: user.id, handle: user.handle};

        jwt.sign(
            payload,
            keys.secretOrKey,
            // Tell the key to expire in one hour
            {expiresIn: 3600},
            (err, token) => {
            res.json({
                success: true,
                token: 'Bearer ' + token
            });
            });
        } else {
        return res.status(400).json({password: 'Incorrect password'});
        }
    })
})
})

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email
  });
})

//! -------------------- DATA --------------------
const Post = require('../../models/Post');
const Bookclub = require('../../models/Bookclub');
const Book = require('../../models/Book');
router.get('/:id/books', (req, res) => {
  User.findById(req.params.id)
    .then(post =>
      Book.find({ '_id': { $in: post.books } })
        .then(post => res.json(post))
    )
    .catch(err => res.status(404).json({ nobooksfound: 'No books found' }));
});
router.get('/:id/posts', (req, res) => {
  User.findById(req.params.id)
    .then(post =>
      Post.find({ '_id': { $in: post.posts } })
        .then(post => res.json(post))
    )
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});
router.get('/:id/bookclubs', (req, res) => {
  User.findById(req.params.id)
    .then(bookclub =>
      Bookclub.find({ '_id': { $in: bookclub.bookclubs } })
        .then(post => res.json(post))
    )
    .catch(err => res.status(404).json({ nobookclubsfound: 'No bookclubs found' }));
});

module.exports = router;