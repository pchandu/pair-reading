// const exit = require('./entry')

const faker = require('faker')
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const users = [
    new User({
        username: "Demo User",
        searchableName: "demo user",
        email: "demo@pairreading.com", 
        password: "ilovereading",
    }),
    new User({
        username: "Kevin Su",
        searchableName: "kevin su",
        email: "kevinsu@pairreading.com", 
        password: "ilovereading",
    }),
    new User({
        username: "Praneeth Chandu",
        searchableName: "praneeth chandu",
        email: "praneethchandu@pairreading.com", 
        password: "ilovereading",
    }),
    new User({
        username: "Kat Chan",
        searchableName: "kat chan",
        email: "katchan@pairreading.com", 
        password: "ilovereading",
    }),
    new User({
        username: "Alex Archibeque",
        searchableName: "alex archibeque",
        email: "alexa@pairreading.com", 
        password: "ilovereading",
    }),
];
// for (let i = 0; i < 20; i++) {
//     let username = faker.name.firstName()
//     users.push(new User({
//         username: username,
//         searchableName: username.toLowerCase(),
//         email: faker.internet.email(),
//         password: "ilovereading",
//     }))
// }
module.exports = {
    users
}