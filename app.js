const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const books = require("./routes/api/books")
const passport = require('passport');
require('./config/passport')(passport);

const path = require('path');

mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use(passport.initialize());
app.use("/api/users", users);
app.use("/api/books", books);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }