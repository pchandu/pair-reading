// const exit = require('./entry')

const User = require('../models/User');
const bcrypt = require('bcryptjs');


module.exports = (nextSeeder) => {
User.deleteMany({}, () => {
    console.log('Deleted all Users')
})


const users = [
    new User({
        username: "Kevin Su",
        email: "kevinsu@pairreading.com", 
        password: "ilovereading",
    }),
    new User({
        username: "Praneeth Chandu",
        email: "praneethchandu@pairreading.com", 
        password: "ilovereading",
    }),
    new User({
        username: "Kat Chan",
        email: "katchan@pairreading.com", 
        password: "ilovereading",
    }),
    new User({
        username: "Alex Archibeque",
        email: "alexa@pairreading.com", 
        password: "ilovereading",
    }),
];
let done = 0;
for(let i=0;i<users.length;i++){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(users[i].password, salt, (err, hash) => {
            if (err) throw err;
            users[i].password = hash;
            users[i].save(
            (err, res) => {
                done++;
                if (done === users.length) {
                    // exit();
                    // return true;
                    nextSeeder();
                }
            })
        })
    })

    console.log(users[i]._id);
}
}