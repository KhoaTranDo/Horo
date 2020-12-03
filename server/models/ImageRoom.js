const mongoose = require('mongoose')

let ImageRoomSchema = mongoose.Schema({
   
    cloudinary_id:{
        type: String,
    },
    imageUrl:{
        type: String,
    }
},{
    timestamps:true,
});

module.exports = ImageRoomSchema = mongoose.model('ImageRoom',ImageRoomSchema)