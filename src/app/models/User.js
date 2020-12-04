const mongoose = require('mongoose')
const email = require('mongoose-slug-generator')
const password = require('mongoose-slug-generator')
const role = require('mongoose-slug-generator')
mongoose.plugin(email)
mongoose.plugin(password)
mongoose.plugin(role)

const Schema = mongoose.Schema

const User = new Schema({

    email: { type: String, minlength:6,required: true, unique: true },
    password: { type: String, minlength:6 },
    role : {type : String,unique:true}
},
    { collection: 'users' }
)

const UserModel = mongoose.model('users', User)

module.exports = UserModel