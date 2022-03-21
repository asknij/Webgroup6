const mongoose = require('mongoose')

const slesSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    total: {
        type: Intl,
        required: true
    },
    date: {
        type: String,
        required: true
    },
   
   


})

module.exports = mongoose.model('Sale', slesSchema)