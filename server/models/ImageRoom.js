const mongoose = require('mongoose')

const ImageRoomSchema = new mongoose.Schema({
   
    cloudinary_id:{
        type: String,
    },
    imageUrl:{
        type: String,
    },
})

module.exports = mongoose.model('ImageRoom',ImageRoomSchema)