const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps:true,
});

module.exports = UserSchema = mongoose.model('user', UserSchema);