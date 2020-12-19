var mongoose = require('mongoose');

var FeatureSchema = new mongoose.Schema(
    {
        id:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        }
      
    },{
        versionKey:false
    }
);

var FeatureSchema= mongoose.model('TypeRoom',TypeNewsNewsSchema,'TypeNews')
module.exports=TypeNews;