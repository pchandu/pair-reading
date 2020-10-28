// const exit = require('./entry')

const faker = require('faker')
const BookClub = require('../models/Bookclub');
const bookclubs = [
    new BookClub({
        title: "Grandma's Bookiest Club",
    }),
    new BookClub({
        title: "Kevin and Praneeth Club",
    }),
    new BookClub({
        title: "Kat Club",
    }),
];
for (let i = 0; i < 10; i++) {
    bookclubs.push(new BookClub({
        title: faker.company.companyName()
    }))
}
module.exports = {
    bookclubs
}