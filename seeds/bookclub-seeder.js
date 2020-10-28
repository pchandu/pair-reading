// const exit = require('./entry')

const BookClub = require('../models/Bookclub');
module.exports = (nextSeeder) => {

    BookClub.deleteMany({}, () => {
        console.log('Deleted all BookClubs')
    })


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

    let done = 0

    for (let i = 0; i < bookclubs.length; i++) {
        bookclubs[i].save(function (err, result) {
            done++;
            if (done === bookclubs.length) {
                // exit();
                nextSeeder();
            }
        });
        console.log(bookclubs[i]._id);
    }
}