const mongoose = require('mongoose'); //

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    text: {
        type: String,
    },
    date: {
        type: Date,
    }
});

module.exports = mongoose.model('Comment', commentSchema)