// const exit = require('./entry')
const faker = require('faker')
const Post = require('../models/Post');
const posts = [
    new Post({
        body: "Harry Potter's in depth look at death was too much for young readers",
    }),
    new Post({
        body: "Dumbledore's beard is to die for",
    }),
    new Post({
        body: "Harry Potter is great children's literature",
    }),
    new Post({
        body: "Steve Jobs exhibited classical narcissitic behavior",
    }),
    new Post({
        body: "Teenage girls now love glitter",
    }),
    new Post({
        body: "I will follow Khaleesi to the ends of this world",
    }),
    new Post({
        body: "They totally butchered the last season of GoT",
    }),
];
for(let i=0;i<500;i++){
    posts.push(new Post({
        body: faker.commerce.productDescription()
    }))
}
module.exports = {
    posts
}
