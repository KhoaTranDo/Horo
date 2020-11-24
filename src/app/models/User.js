const mongoose = require('mongoose')
const email = require('mongoose-slug-generator')

mongoose.plugin(email)

const Schema = mongoose.Schema

const User = new Schema({

    email: { type: String, required: true, unique: true },
    password: { type: String }
},
    { collection: 'users' }
)

const UserModel = mongoose.model('users', User)

module.exports = UserModel