// const exit = require('./entry')

const faker = require("faker");
const Book = require("../models/Book");

const books = [
  new Book({
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    genre: "Fantasy-Fiction",
    imagePath:
      "https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SX340_BO1,204,203,200_.jpg./frontend/public/images/1.jpg",
    description:
      "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series.",
  }),
  new Book({
    title: "Fire & Blood",
    author: "George R.R. Martin",
    genre: "Fantasy-Fiction",
    imagePath: "https://m.media-amazon.com/images/I/51Iu2FiWUTL._SY346_.jpg",
    description:
      "Centuries before the events of A Game of Thrones, House Targaryen—the only family of dragonlords to survive the Doom of Valyria—took up residence on Dragonstone. Fire & Blood begins their tale with the legendary Aegon the Conqueror, creator of the Iron Throne, and goes on to recount the generations of Targaryens who fought to hold that iconic seat, all the way up to the civil war that nearly tore their dynasty apart. What really happened during the Dance of the Dragons? Why was it so deadly to visit Valyria after the Doom? What were Maegor the Cruel’s worst crimes? What was it like in Westeros when dragons ruled the skies? These are but a few of the questions answered in this essential chronicle, as related by a learned maester of the Citadel and featuring more than eighty all-new black-and-white illustrations by artist Doug Wheatley. Readers have glimpsed small parts of this narrative in such volumes as The World of Ice & Fire, but now, for the first time, the full tapestry of Targaryen history is revealed. With all the scope and grandeur of Gibbon’s The History of the Decline and Fall of the Roman Empire, Fire & Blood is the the first volume of the definitive two-part history of the Targaryens, giving readers a whole new appreciation for the dynamic, often bloody, and always fascinating history of Westeros.",
  }),
  new Book({
    title: "Becoming Steve Jobs",
    genre: "Non-Fiction",
    author: "Brent Schlender and Rick Tetzeli",
    imagePath:
      "https://images-na.ssl-images-amazon.com/images/I/513s9g1DBsL._SX324_BO1,204,203,200_.jpg",
    description:
      "Becoming Steve Jobs takes on and breaks down the existing myth and stereotypes about Steve Jobs. The conventional, one-dimensional view of Jobs is that he was half genius, half jerk from youth, an irascible and selfish leader who slighted friends and family alike. Becoming Steve Jobs answers the central question about the life and career of the Apple cofounder and CEO: How did a young man so reckless and arrogant that he was exiled from the company he founded become the most effective visionary business leader of our time, ultimately transforming the daily lives of billions of people? Drawing on incredible and sometimes exclusive access, Schlender and Tetzeli tell a different story of a real human being who wrestled with his failings and learned to maximize his strengths over time. Their rich, compelling narrative is filled with stories never told before from the people who knew Jobs best and who decided to open up to the authors, including his family, former inner circle executives, and top people at Apple, Pixar, and Disney. In addition Brent knew Jobs personally for 25 years and drew upon his many interviews with him, on and off the record, in writing the book. He and Rick humanize the man and explain, rather than simply describe, his behavior. Along the way the book provides rich context about the technology revolution we all have lived through and the ways in which Jobs changed our world. Schlender and Tetzeli make clear that Jobs' astounding success at Apple was far more complicated than simply picking the right products: he became more patient, he learned to trust his inner circle, and he discovered the importance of growing the company incrementally rather than only shooting for dazzling, game-changing products.",
  }),
  new Book({
    title: "Twilight",
    author: "Stephanie Meyer",
    genre: "Fantasy-Fiction",
    imagePath:
      "https://images-na.ssl-images-amazon.com/images/I/41K99+cInvL._SY344_BO1,204,203,200_.jpg",
    description:
      "About three things I was certain. First, Edward was a vampire. Second, there was a part of him, and I didn't know how dominant that part might be, that thirsted for my blood. And Third, I was unconditionally and irrevocably in love with him.",
  }),
  new Book({
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Historical-Fiction",
    imagePath:
      "https://images-na.ssl-images-amazon.com/images/I/51vRNqL61aL._SX318_BO1,204,203,200_.jpg",
    description:
      "Taking us from Afghanistan in the final days of its monarchy to the present, The Kite Runner is the unforgettable and beautifully told story of the friendship between two boys growing up in Kabul. Raised in the same household and sharing the same wet nurse, Amir and Hassan grow up in different worlds: Amir is the son of a prominent and wealthy man, while Hassan, the son of Amir's father's servant, is a Hazara - a shunned ethnic minority. Their intertwined lives, and their fates, reflect the eventual tragedy of the world around them. When Amir and his father flee the country for a new life in California, Amir thinks that he has escaped his past. And yet he cannot leave the memory of Hassan behind him. The Kite Runner is a novel about friendship and betrayal, and about the price of loyalty. It is about the bonds between fathers and sons, and the power of fathers over sons - their love, their sacrifices, and their lies. Written against a backdrop of history that has not been told in fiction before, The Kite Runner describes the rich culture and beauty of a land in the process of being destroyed. But through the devastation, Khaled Hosseini offers hope for redemption.",
  }),
  new Book({
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Fantasy-Fiction",
    imagePath:
      "https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg",
    description:
      "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.",
  }),
  new Book({
    title: "Ready Player One",
    author: "Ernest Cline",
    genre: "Fantasy-Fiction",
    imagePath:
      "https://images-na.ssl-images-amazon.com/images/I/9193hRad9yL.jpg",
    description:
      "In the year 2045, reality is an ugly place. The only time Wade Watts really feels alive is when he’s jacked into the OASIS, a vast virtual world where most of humanity spends their days. When the eccentric creator of the OASIS dies, he leaves behind a series of fiendish puzzles, based on his obsession with the pop culture of decades past. Whoever is first to solve them will inherit his vast fortune—and control of the OASIS itself. ",
  }),
  new Book({
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    genre: "Non-Fiction",
    imagePath:
      "https://prodimage.images-bn.com/pimages/9780553296983_p0_v2_s1200x630.jpg",
    description:
      "Discovered in the attic in which she spent the last years of her life, Anne Frank’s remarkable diary has become a world classic—a powerful reminder of the horrors of war and an eloquent testament to the human spirit.",
  }),
  new Book({
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    genre: "Non-Fiction",
    imagePath:
      "https://images-na.ssl-images-amazon.com/images/I/916qRhvRaYL.jpg",
    description:
      "Her name was Henrietta Lacks, but scientists know her as HeLa. She was a poor Southern tobacco farmer who worked the same land as her slave ancestors, yet her cells—taken without her knowledge—became one of the most important tools in medicine: The first “immortal” human cells grown in culture, which are still alive today, though she has been dead for more than sixty years. HeLa cells were vital for developing the polio vaccine; uncovered secrets of cancer, viruses, and the atom bomb’s effects; helped lead to important advances like in vitro fertilization, cloning, and gene mapping; and have been bought and sold by the billions. ",
  }),
  new Book({
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Non-Fiction",
    imagePath:
      "https://images-na.ssl-images-amazon.com/images/I/81pQPZAFWbL.jpg",
    description:
      "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries? Are there other dimensions in space? What will happen when it all ends?",
  }),
  new Book({
    title: "Freakonomics",
    author: "Stephen J. Dubner",
    genre: "Non-Fiction",
    imagePath:
      "https://images-na.ssl-images-amazon.com/images/I/51gYI2oq6KL.jpg",
    description:
      "Through forceful storytelling and wry insight, Levitt and co-author Stephen J. Dubner show that economics is, at root, the study of incentives-;how people get what they want, or need, especially when other people want or need the same thing. In Freakonomics, they set out to explore the hidden side of ... well, everything.",
  }),
  new Book({
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    imagePath:
      "https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg",
    description:
      "From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.”",
  }),
  new Book({
    title: "How to Win Friends & Influence People",
    author: "Dale Carnegie",
    genre: "Non-Fiction",
    imagePath:
      "https://images-na.ssl-images-amazon.com/images/I/51X7dEUFgoL._AC_SY400_.jpg",
    description:
      "Dale Carnegie’s rock-solid, time-tested advice has carried countless people up the ladder of success in their business and personal lives",
  }),
  new Book({
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    genre: "Historical-Fiction",
    imagePath:
      "https://images-na.ssl-images-amazon.com/images/I/81LpkLCJ4IL.jpg",
    description:
      "It was the time of the French Revolution — a time of great change and great danger. It was a time when injustice was met by a lust for vengeance, and rarely was a distinction made between the innocent and the guilty. Against this tumultuous historical backdrop, Dickens' great story of unsurpassed adventure and courage unfolds.",
  }),
  new Book({
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    genre: "Historical-Fiction",
    imagePath:
      "https://prodimage.images-bn.com/pimages/9781451635621_p0_v3_s1200x630.jpg",
    description:
      "Many novels have been written about the Civil War and its aftermath. None take us into the burning fields and cities of the American South as Gone With the Wind does, creating haunting scenes and thrilling portraits of characters so vivid that we remember their words and feel their fear and hunger for the rest of our lives.",
  }),
];
module.exports = {
  books,
};
