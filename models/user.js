const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema)