const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Role = new Schema({

    location: { type: String, maxLength: 200 },
    address: { type: String, maxLength: 200 },
    room: { type: String, maxLength: 200 },
    img: { type: String, maxLength: 200 },
    price: { type: String, maxLength: 200 },
    slug: { type: String, maxLength: 200 },
    //image : type:file
    // price: { type: String, maxLength: 200 },

})

module.exports = mongoose.model('Role', Role)