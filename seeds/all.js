const {exit,saveData} = require('./entry')
const { users} = require('./user-seeder')
const { books} = require('./book-seeder')
const { bookclubs} = require('./bookclub-seeder')
const { forums} = require('./forum-seeder')
const { posts} = require('./post-seeder')
const bcrypt = require('bcryptjs');


const User = require('../models/User');
const Book = require('../models/Book');
const BookClub = require('../models/Bookclub');
const Forum = require('../models/Forum');
const Post = require('../models/Post');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let idx = 0;

//------------- USER ASS -------------
for (let i = 0; i < users.length; i++) {
    //! Preferred Books
    for (let j = 0; j < getRandomInt(books.length) + 1; j++) {
        idx = getRandomInt(books.length);
        users[i].books.push(books[idx]);
        books[idx].users.push(users[i]);
    }
    //! Bookclubs ( handled below)
    //! Posts ( handled below)
}
//------------- BOOK ASS -------------
//! Reader (handled above)
//! Forums (handled below)
//! Bookclubs (handled below)
//------------- FORUM ASS -------------
for (let i = 0; i < forums.length; i++) {
    //! BOOK
    idx = getRandomInt(books.length);
    forums[i].book = books[idx];
    books[idx].forums.push(forums[i])
    //! BOOKCLUB
    idx = getRandomInt(bookclubs.length);
    forums[i].bookclub = bookclubs[idx];
    bookclubs[idx].forums.push(forums[i])
}
//------------- POST ASS -------------
for(let i=0;i<posts.length;i++){
    //! USER
    idx = getRandomInt(users.length);
    posts[i].user = users[idx];
    users[idx].posts.push(posts[i]);
    //! FORUM
    idx = getRandomInt(forums.length);
    posts[i].forum = forums[idx];
    forums[idx].posts.push(posts[i]);
}
//------------- BOOKCLUB ASS -------------
for (let i = 0; i < bookclubs.length; i++) {
    //! User memembers
    for (let j = 0; j < getRandomInt(users.length/2)+1; j++ ){
        idx = getRandomInt(users.length);
        bookclubs[i].users.push(users[idx]);
        users[idx].bookclubs.push(bookclubs[i]);
    }
    //! Books
    for (let j = 0; j < getRandomInt(books.length)+1; j++ ){
        idx = getRandomInt(books.length);
        bookclubs[i].books.push(books[idx]);
        books[idx].bookclubs.push(bookclubs[i]);
    }
    //! Forums (handled above)
}
//------------- USER BCRYPT -------------
User.deleteMany({}, () => {
    console.log('Deleted user data')
})
let done = 0;
for (let i = 0; i < users.length; i++) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(users[i].password, salt, (err, hash) => {
            if (err) throw err;
            users[i].password = hash;
            console.log(users[i].password)
            users[i].save( (err, result) => {
                done++;
                if (done === users.length) {
                    // exit();
                    saveAllData();
                }
            })
        })
    })
}

// console.log(users[0].password)

// const saveAllData = () => saveData( User, users,
const saveAllData =
() => saveData( Book, books,
() => saveData( BookClub, bookclubs,
() => saveData( Forum, forums,
() => saveData( Post, posts, exit
))))