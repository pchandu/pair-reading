// const exit = require('./entry')

const faker = require('faker')
const Forum = require('../models/Forum');
const forums = [
    new Forum({
        title: "Thematic discussions of Harry Potter",
    }),
    new Forum({
        title: "Character analysis of Steve Jobs",
    }),
    new Forum({
        title: "Twilight's effects on 21st century teen culture",
    }),
    new Forum({
        title: "Bloodsuckers are scary",
    }),
    new Forum({
        title: "George RR Martin's beard",
    }),
    new Forum({
        title: "Kites are fun to fly",
    }),
];
for (let i = 0; i < 10; i++) {
    forums.push(new Forum({
        title: faker.commerce.productName()
    }))
}
module.exports = {
    forums
}