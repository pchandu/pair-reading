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

const {uniqueIdx, getRandomInt} = require('../routes/api/routes_util')

let idx = 0;

// //------------- USER ASS -------------
// users[0].preferred_meeting_time.M = true;
// users[0].preferred_meeting_time.A = true;
// users[0].preferred_meeting_time.E = true;
// for (let j = 0; j < books.length; j++) {
//     users[0].books.push(books[j]);
//     books[j].users.push(users[0]);
// }

// for (let i = 1; i < users.length; i++) {
//     //! Preferred Books
//     // for (let j = 0; j < getRandomInt(books.length) + 1; j++) {
//     for (let j = 0; j < 1; j++) {
//         idx = uniqueIdx(users[i].books, books)
//         users[i].books.push(books[idx]);
//         books[idx].users.push(users[i]);
//     }
//     users[i].preferred_meeting_time.M = getRandomInt(4) === 1;
//     users[i].preferred_meeting_time.A = getRandomInt(4) === 1;
//     users[i].preferred_meeting_time.E = getRandomInt(4) === 1;
//     //! Bookclubs ( handled below)
//     //! Posts ( handled below)
// }
// //------------- BOOK ASS -------------
// //! Reader (handled above)
// //! Forums (handled below)
// //! Bookclubs (handled below)
// for (let i = 0; i < books.length; i++) {
//     //! BOOK
//     for (let j = 0; j < books.length; j++) {
//         idx = uniqueIdx(books[i].forums, forums);
//         books[i].forums.push(forums[idx])
//         forums[idx].book = books[i];
//     }
// }
// //------------- FORUM ASS -------------
// for (let i = 0; i < forums.length; i++) {
//     //! BOOKCLUB
// }
// //------------- POST ASS -------------
// for(let i=0;i<posts.length;i++){
//     //! USER
//     idx = getRandomInt(users.length);
//     posts[i].user = users[idx];
//     users[idx].posts.push(posts[i]);
//     //! FORUM
//     idx = getRandomInt(forums.length);
//     posts[i].forum = forums[idx];
//     forums[idx].posts.push(posts[i]);
// }
// //------------- BOOKCLUB ASS -------------
// for (let i = 0; i < bookclubs.length; i++) {
//     //! User memembers
//     for (let j = 0; j < getRandomInt(users.length/2)+1; j++ ){
//         idx = uniqueIdx(bookclubs[i].users, users)
//         bookclubs[i].users.push(users[idx]);
//         users[idx].bookclubs.push(bookclubs[i]);
//     }
//     //! Books
//     for (let j = 0; j < getRandomInt(books.length)+1; j++ ){
//         idx = uniqueIdx(bookclubs[i].books, books)
//         bookclubs[i].books.push(books[idx]);
//         books[idx].bookclubs.push(bookclubs[i]);
//     }
//     //! Forums
//     for (let j = 0; j < getRandomInt(bookclubs.length)+1; j++ ){
//         idx = uniqueIdx(bookclubs[idx].forums, forums);
//         bookclubs[i].forums.push(forums[idx])
//         forums[idx].bookclub = bookclubs[i];
//     }
// }
//------------- USER BCRYPT -------------
User.deleteMany({}, () => {
    console.log('Deleted user data')
})
// Book.deleteMany({}, () => {
//     console.log('Deleted Book data')
// })
BookClub.deleteMany({}, () => {
    console.log('Deleted BookClub data')
})
Forum.deleteMany({}, () => {
    console.log('Deleted Forum data')
})
Post.deleteMany({}, () => {
    console.log('Deleted Post data')
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

// const saveAllData = () => saveData( User, users, exit);
const saveAllData =
() => saveData( Book, books, exit
// () => saveData( BookClub, bookclubs,
// () => saveData( Forum, forums,
// () => saveData( Post, posts, exit
)
// )))
// saveAllData();