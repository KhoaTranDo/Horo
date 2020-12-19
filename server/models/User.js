const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    phone: {
        type: String,
        required: true,
        unique:true,
        minlength:9,
        maxlength:10
    },
    password: {
        type: String,
        required: true
    },
    roles:{type:Number,default:0},
},
{
    timestamps:true,
});

module.exports = UserSchema = mongoose.model('UserProfile', UserSchema);