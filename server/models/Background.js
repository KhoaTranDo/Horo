const mongoose = require('mongoose');

let BackgroundSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    describe: {
        type: String,
        required: true
    }
},
{
    timestamps:true,
});

module.exports = BackgroundSchema  = mongoose.model('Background', BackgroundSchema);