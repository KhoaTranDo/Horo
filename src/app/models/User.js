const mongoose = require('mongoose')
const email = require('mongoose-slug-generator')
const password = require('mongoose-slug-generator')
const role = require('mongoose-slug-generator')
mongoose.plugin(email)
mongoose.plugin(password)
mongoose.plugin(role)

const Schema = mongoose.Schema

const User = new Schema({

    email: { type: String, minlength: 6, required: true, unique: true },
    password: { type: String, minlength: 6, required: true },
    username: { type: String, minlength: 6, required: true },
    phone: { type: String, minlength: 6, required: true },
    // gender: { type: String, minlength: 6, required: true },
    role: { type: String, required: true }
},
    { collection: 'users' }
)

const UserModel = mongoose.model('users', User)

module.exports = UserModel