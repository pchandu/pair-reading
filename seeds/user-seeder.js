const User = require('../models/User');
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
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
    users[i].save((err,res)=>{
        done++;
        if(done===users.length){
            exit();
        }
    });
}
const exit = () => (
    mongoose.disconnect()
)