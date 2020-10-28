// const exit = require('./entry')

const Post = require('../models/Post');
module.exports = (nextSeeder) => {

    Post.deleteMany({}, () => {
        console.log('Deleted all posts')
    })


    const posts = [
        new Post({
            body: "Harry Potter's in depth look at death was too much for young readers",
        }),
        new Post({
            body: "Steve Jobs exhibited classical narcissitic behavior",
        }),
        new Post({
            body: "Teenage girls now love glitter",
        }),
        new Post({
            body: "Harry Potter is great children's literature",
        }),
    ];

    let done = 0

    for (let i = 0; i < posts.length; i++) {
        posts[i].save(function (err, result) {
            done++;
            if (done === posts.length) {
                // exit();
                nextSeeder();
            }
        });
        console.log(posts[i]._id);
    }
}