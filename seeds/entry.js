const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })

const exit = () => (
    mongoose.disconnect()
)

const saveData = (model, data, nextSeeder) => {

    model.deleteMany({}, () => {
        console.log('Deleted all data')
    })
    let done = 0

    for (let i = 0; i < data.length; i++) {
        data[i].save(function (err, result) {
            done++;
            if (done === data.length) {
                // exit();
                nextSeeder();
            }
        });
        // console.log(data[i]._id);
    }
}

module.exports = {
    exit,
    saveData
}