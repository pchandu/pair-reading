const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })

const exit = () => (
    mongoose.disconnect()
)
module.exports = exit;