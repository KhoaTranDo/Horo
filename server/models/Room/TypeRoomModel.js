var mongoose = require('mongoose');

var TypeRoomSchema = new mongoose.Schema(
    {
        id:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        }
      
    }
);

module.exports=TypeRoomSchema= mongoose.model('TypeRoom',TypeRoomSchema)