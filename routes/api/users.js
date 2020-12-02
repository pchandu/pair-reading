const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys')
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const passport = require('passport')

const _user = 'username email posts bookclubs books preferred_meeting_time invites'

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));


// [0] { invite:
//        { type: 'calendar',
//          invitee: 'adlfjalsjdfjla',
//          title: 'aflkjlsjf',
//          date: '2020-11-26T04:30:00.000Z' },
//      userId: '5fbdd57d905e7c80a3dcbe7e' }
// MEETING INVITES 

router.post('/createMeetingInvite', (req, res) => {
  // console.log(req.body)
  if( !req.body.data.invite.date ){
    return res.json({err: "You need a valid date!"})
  }else if(!req.body.data.invite.title){
    return res.json({err: "You need a Title!"})
  }else{
  let date = req.body.data.invite.date.slice(0,10)
  let time = req.body.data.invite.date.slice(11,19)
  let title = req.body.data.invite.title

  User.findById(req.body.data.userId)
  .then( user => {
    if(user){
    User.findOne({searchableName: req.body.data.invite.invitee.toLowerCase()})
    .then(invitee => {

      if(invitee){
        if(invitee.username === user.username){
          return res.json({err: "Cant invite yourself!"})
        }else{
          
          invitee.invites.push({
            date: date,
            inviterUsername: user.username,
            time: time,
            title: title,
            type: "calendar",
            book: req.body.data.invite.book
          })
          invitee.save();
  
          inviterUsername = user.username
          let partner = req.body.data.invite.invitee
          user.meetings.push({ 
            date: date, 
            partner: partner, 
            time: time, 
            title: title,
            book: req.body.data.invite.book
          })
          user.save();
            return res.status(200).json({msg:`Invite sent to ${invitee.username}`})
        } 
      } else {
        return res.json({err:"Invitee doesnt exist"})
      }
    })}
    else{
      return res.json({err: "Something went wrong"})
    }
    
  })}
  
  // { type: 'calendar', date: date, time: time,
  //  inviterUsername: user.username, title: title }
  

})


router.post('/acceptCalInvite', (req,res) => {
  User.findById(req.body.data.userId)
    .then( user => {
      if(user){
      user.meetings.push({ 
        date: req.body.data.date, 
        partner: req.body.data.inviterUsername, 
        time: req.body.data.time, 
        title: req.body.data.title,
        book: req.body.data.book 
      })

      user.invites.forEach( (invite, idx) => {
        if(invite.title === req.body.data.title){
          user.invites.splice(idx,1)
        }
      })

      user.save()

      return res.status(200).json({msg: "done!"})
    }else{
      return res.json({msg:"Something went wrong."})
    }
    })

})

// [0] { date: '2020-12-02',
// [0]   inviterUsername: null,
// [0]   time: '08:00:00',
// [0]   title: 'asdfasdf',
// [0]   type: 'calendar', 
//       userId: '5fbdde66f036d08b8a9e6b28' }

router.delete('/denyCalInvite', (req,res) => {

  User.findById(req.body.userId)
    .then( user => {
      if(user){
      user.invites.forEach( (invite,idx) => {
        if(invite.title === req.body.title) {
          user.invites.splice(idx,1)
        }
      })
      user.save()

      return res.status(200).json({msg:"denied"})
    }else{
      return res.json({msg:"User not found."})
    }
    })

})

router.patch('/updateUser', (req, res) => {
  // console.log(req.body)
  User.findById(req.body.user)
    .then(user => {
      if (user) {
        user.books = req.body.preferred_books;
        user.preferred_meeting_time = req.body.preferred_meeting_times;
        // user.preferred_meeting_time = req.body.preferred_meeting_times;
        user.save()
          .then( (user) => res.json(user) )
      } else {
        return res.json({ msg: "Something went wrong, captain."})
      }
    })
})

router.patch("/userFollowBook", (req, res) => {
  User.findById(req.body.user).then((user) => {
    if (user) {
      Book.findById(req.body.book).then(book => {
        if(user.books.includes(req.body.book)) {
          
          user.books.forEach( (ele, idx) => {
            //  console.log(ele);
            //  console.log(typeof ele);
            //  console.log(typeof JSON.stringify(ele));
          //  console.log(JSON.stringify(ele));
          let sult = JSON.stringify(ele).slice(1, -1);
            if (sult === req.body.book) {
              user.books.splice(idx, 1);
            }
          })
          //! Book remove
          book.users.forEach( (userId, idx) => {
            if (userId === user._id) {
              book.users.splice(idx, 1);
            }
          })
        } else {
          user.books.push(req.body.book);
          //! Book add
          book.users.push(user._id)
        }
        book.save();
        user.save().then((user) => res.json(user));
      })
    } else {
      return res.json({ msg: "Something went wrong, captain." });
    }
  });
});

router.post('/refreshUserInfo', (req,res) => {
  User.findById(req.body.user)
    .then(user => {
      if(user) {
        res.json({
          books: user.books,
          bookclubs: user.bookclubs,
          email: user.email,
          id: user.id,
          invites: user.invites,
          meetings: user.meetings,
          posts: user.posts,
          preferred_meeting_time: user.preferred_meeting_time,
          username: user.username,
        })
        return res.status(200).json({msg: "updated!"})
      } else {
        return res.json({ msg: "Not sure what happened."})
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
          searchableName: req.body.username.toLowerCase(),
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
          const payload = {id: user.id,
              username: user.username,
              email: user.email,
              books: user.books,
              bookclubs: user.bookclubs,
              posts: user.posts,
              preferred_meeting_time: user.preferred_meeting_time,
              invites: user.invites,
              meetings: user.meetings
          };

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
const BookClub = require('../../models/Bookclub');
const Book = require('../../models/Book');
const { convert2POJO, nestedIndex, userMatches,userTimesMatches, userBookMatches } = require('../api/routes_util')

const {filterPosts} = require('../../filters/posts_filter');
const filterBooks = require('../../filters/books_filter');
const filterBookclubs = require('../../filters/bookclubs_filter');


router.get('/', (req, res) => {
  User.find({},_user)
    .then(users => {
      // console.log(users)
      return convert2POJO(res, users)
    })
    .catch(err => res.status(404).json({ nouserfound: 'No user found' }));
});
router.get('/:id', (req, res) => {
  User.findById(req.params.id, _user)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ nouserfound: 'No user found' }));
});
router.get('/:id/books', (req, res) => {
  User.findById(req.params.id)
    .then(user =>
      nestedIndex(Book, user.books, filterBooks(req.query), res)
    )
    .catch(err => res.status(404).json({ nobooksfound: 'No books found' }));
});
router.get('/:id/matches', (req, res) => {
  User.findById(req.params.id)
    .then(user =>
      userMatches(User, user, res)
    )
    .catch(err => res.status(404).json({ nobooksfound: 'No books found' }));
});
router.get('/:id/timematches', (req, res) => {
  User.findById(req.params.id)
    .then(user =>
      userTimesMatches(User, user, res)
    )
    .catch(err => res.status(404).json({ nobooksfound: 'No books found' }));
});
router.get('/:id/bookmatches', (req, res) => {
  User.findById(req.params.id)
    .then(user =>
      userBookMatches(User, user, res)
    )
    .catch(err => res.status(404).json({ nobooksfound: 'No books found' }));
});
router.get('/:id/posts', (req, res) => {
  // console.log(req.query.recentCnt)
  const cnt = { limit: req.query.recentCnt, offset: req.query.offset};
  User.findById(req.params.id)
    .then(user =>
      {
      console.log(filterPosts(req.query))
        return nestedIndex(Post, user.posts, filterPosts(req.query), res, cnt)}
    )
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});
router.get('/:id/bookclubs', (req, res) => {
  User.findById(req.params.id)
    .then(user =>
      nestedIndex(BookClub, user.bookclubs, filterBookclubs(req.query), res)
    )
    .catch(err => res.status(404).json({ nobookclubsfound: 'No bookclubs found' }));
});

module.exports = router;