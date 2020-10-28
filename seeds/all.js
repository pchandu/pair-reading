const exit = require('./entry')
const UserSeeds = require('./user-seeder')
const BookSeeds = require('./book-seeder')
const BookClubSeeds = require('./bookclub-seeder')
const ForumSeeds = require('./forum-seeder')
const PostSeeds = require('./post-seeder')
UserSeeds(
    () => BookSeeds(
    () => BookClubSeeds(
    () => ForumSeeds(
    () => PostSeeds(exit
    
)))))