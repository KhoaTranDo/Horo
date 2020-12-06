const RoomSchema = require('../models/RoomModel');
const path = require('path')
class Room { 
    async addRoom(req,res){
        try{     
            let {Size,NumberRoom,NumberPeople,address,roomtype,image,feature,genderRules,describe,firstprice,prices,UserID}=req.body;
           
           const room= new RoomSchema({UserID,properties:{
                    Size,
                    NumberRoom,
                    NumberPeople,
                    address,
                    roomtype,
                    image,
                    feature,
                    genderRules,
                    describe,
                    firstprice,
                    prices,
                    image
           }
            })      
          room.save();
        }catch(error){
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..."});
        }
    }
    async postAllRoom(req,res){
        try{
            const postRoom = await RoomSchema.find();
            res.json(postRoom)
        }catch(err){
            res.json({message:err});
        };
    }
        
   
    
}
module.exports = new Room();