const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const books = require("./routes/api/books")
const forums = require("./routes/api/forums")
const posts = require("./routes/api/posts")
const bookclubs = require("./routes/api/bookclubs")
const passport = require('passport');
require('./config/passport')(passport);

const path = require('path');

mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use(passport.initialize());

//! START ROUTES
app.use("/api/users", users);
app.use("/api/books", books);
app.use("/api/forums", forums);
app.use("/api/posts", posts);
app.use("/api/bookclubs", bookclubs);
//! END ROUTES

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }