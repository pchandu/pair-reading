// const exit = require('./entry')

const User = require('../models/User');
const bcrypt = require('bcryptjs');

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

module.exports = {
    users
}