// const exit = require('./entry')

const faker = require('faker')
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const users = [
    new User({
        username: "Demo User",
        email: "demo@pairreading.com", 
        password: "ilovereading",
    }),
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
for (let i = 0; i < 20; i++) {
    users.push(new User({
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: "ilovereading",
    }))
}
module.exports = {
    users
}