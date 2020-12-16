const mongoose = require('mongoose')
const email = require('mongoose-slug-generator')
const password = require('mongoose-slug-generator')
const role = require('mongoose-slug-generator')
const phone = require('mongoose-slug-generator')
mongoose.plugin(email)
mongoose.plugin(password)
mongoose.plugin(role)
mongoose.plugin(phone)

const Schema = mongoose.Schema

const User = new Schema({

    email: { type: String, minlength: 6, required: true },
    password: { type: String, minlength: 6, required: true },
    username: { type: String, minlength: 6, required: true },
    phone: { type: Number, minlength: 6, required: true, unique: true },
    // gender: { type: String, minlength: 6, required: true },
    role: { type: String, required: true }
},
    { collection: 'users' }
)

const UserModel = mongoose.model('users', User)

module.exports = UserModel