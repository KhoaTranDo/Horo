var mongoose = require('mongoose');

var FeebBackSchema = new mongoose.Schema(
    {
        idUser:{
            type:String,
            required:true
        },
        idTransaction:{
            type:String,
            required:true
        },
        contentFeedback:{
            type:String,
            required:true
        },
        timeFeedback:{
            type:Date,
            default:Date.now 
        }
      
    }
);

var FeebBack= mongoose.model('FeebBack',FeebBackSchema,'FeedBack')
module.exports=FeebBack;