// const exit = require('./entry')

const Forum = require('../models/Forum');
module.exports = (nextSeeder) => {

    Forum.deleteMany({}, () => {
        console.log('Deleted all forums')
    })


    const forums = [
        new Forum({
            title: "Thematic discussions of Harry Potter",
        }),
    ];

    let done = 0

    for (let i = 0; i < forums.length; i++) {
        forums[i].save(function (err, result) {
            done++;
            if (done === forums.length) {
                // exit();
                nextSeeder();
            }
        });
        console.log(forums[i]._id);
    }
}