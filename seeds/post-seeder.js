// const exit = require('./entry')

const Post = require('../models/Post');
module.exports = (nextSeeder) => {

    Post.deleteMany({}, () => {
        console.log('Deleted all posts')
    })


    const posts = [
        new Post({
            body: "this book sucked",
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