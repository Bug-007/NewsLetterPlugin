const mongoose = require('mongoose');

const url = "mongodb+srv://KAKA:mMkaJ8aWtYCWSWbp@cluster0.hzisnaj.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(url)
.then(() => {
    console.log('Connected to database');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;