var Book = require('../models/Book');
const db = require('../config/keys').mongoURI;
var mongoose = require('mongoose');

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true} )
var books = [
    new Book({
            title: "Harry Potter and the Chamber of Secrets",
            author: "J.K. Rowling",
            imagePath: "./frontend/public/images/1.jpg",
            description: "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series.",
        }),
    new Book({
            title: "Fire & Blood",
            author: "George R.R. Martin",
            imagePath: "./frontend/public/images/2.jpg",
            description: "Centuries before the events of A Game of Thrones, House Targaryen—the only family of dragonlords to survive the Doom of Valyria—took up residence on Dragonstone. Fire & Blood begins their tale with the legendary Aegon the Conqueror, creator of the Iron Throne, and goes on to recount the generations of Targaryens who fought to hold that iconic seat, all the way up to the civil war that nearly tore their dynasty apart. What really happened during the Dance of the Dragons? Why was it so deadly to visit Valyria after the Doom? What were Maegor the Cruel’s worst crimes? What was it like in Westeros when dragons ruled the skies? These are but a few of the questions answered in this essential chronicle, as related by a learned maester of the Citadel and featuring more than eighty all-new black-and-white illustrations by artist Doug Wheatley. Readers have glimpsed small parts of this narrative in such volumes as The World of Ice & Fire, but now, for the first time, the full tapestry of Targaryen history is revealed. With all the scope and grandeur of Gibbon’s The History of the Decline and Fall of the Roman Empire, Fire & Blood is the the first volume of the definitive two-part history of the Targaryens, giving readers a whole new appreciation for the dynamic, often bloody, and always fascinating history of Westeros."
        }),
    new Book({
            title: "Becoming Steve Jobs",
            author: "Brent Schlender and Rick Tetzeli",
            imagePath: "./frontend/public/images/3.jpg",
            description: "Becoming Steve Jobs takes on and breaks down the existing myth and stereotypes about Steve Jobs. The conventional, one-dimensional view of Jobs is that he was half genius, half jerk from youth, an irascible and selfish leader who slighted friends and family alike. Becoming Steve Jobs answers the central question about the life and career of the Apple cofounder and CEO: How did a young man so reckless and arrogant that he was exiled from the company he founded become the most effective visionary business leader of our time, ultimately transforming the daily lives of billions of people? Drawing on incredible and sometimes exclusive access, Schlender and Tetzeli tell a different story of a real human being who wrestled with his failings and learned to maximize his strengths over time. Their rich, compelling narrative is filled with stories never told before from the people who knew Jobs best and who decided to open up to the authors, including his family, former inner circle executives, and top people at Apple, Pixar, and Disney. In addition Brent knew Jobs personally for 25 years and drew upon his many interviews with him, on and off the record, in writing the book. He and Rick humanize the man and explain, rather than simply describe, his behavior. Along the way the book provides rich context about the technology revolution we all have lived through and the ways in which Jobs changed our world. Schlender and Tetzeli make clear that Jobs' astounding success at Apple was far more complicated than simply picking the right products: he became more patient, he learned to trust his inner circle, and he discovered the importance of growing the company incrementally rather than only shooting for dazzling, game-changing products."
        }),
    new Book({
            title: "Twilight",
            author: "Stephanie Meyer",
            imagePath: "./frontend/public/images/4.jpg",
            description: "About three things I was certain. First, Edward was a vampire. Second, there was a part of him, and I didn't know how dominant that part might be, that thirsted for my blood. And Third, I was unconditionally and irrevocably in love with him.",
        }),
    new Book({
            title: "The Kite Runner",
            author: "Khaled Hosseini",
            imagePath: "./frontend/public/images/5.jpg",
            description: "Taking us from Afghanistan in the final days of its monarchy to the present, The Kite Runner is the unforgettable and beautifully told story of the friendship between two boys growing up in Kabul. Raised in the same household and sharing the same wet nurse, Amir and Hassan grow up in different worlds: Amir is the son of a prominent and wealthy man, while Hassan, the son of Amir's father's servant, is a Hazara - a shunned ethnic minority. Their intertwined lives, and their fates, reflect the eventual tragedy of the world around them. When Amir and his father flee the country for a new life in California, Amir thinks that he has escaped his past. And yet he cannot leave the memory of Hassan behind him. The Kite Runner is a novel about friendship and betrayal, and about the price of loyalty. It is about the bonds between fathers and sons, and the power of fathers over sons - their love, their sacrifices, and their lies. Written against a backdrop of history that has not been told in fiction before, The Kite Runner describes the rich culture and beauty of a land in the process of being destroyed. But through the devastation, Khaled Hosseini offers hope for redemption.",
        }),

];

var done = 0
for (var i = 0; i < books.length; i++) {
    books[i].save(function(err, result) {
        done++;
        if (done === books.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}