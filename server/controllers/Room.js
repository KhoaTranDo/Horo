

const RoomSchema = require('../models/RoomModel');

class Room { 
    async addRoom(req,res){
        try{     
            let {Size,NumberRoom,NumberPeople,address,roomtype,feature,genderRules,describe,firstprice,prices}=req.body;
           const room= new RoomSchema({properties:{
                    Size,
                    NumberRoom,
                    NumberPeople,
                    address,
                    roomtype,
                    feature,
                    genderRules,
                    describe,
                    firstprice,
                    prices
           }
            })
                console.log(room)
           room.save();
          //   room =new RoomSchema(req.body)
          // await room.save()
        }catch(error){
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..."});
        }
    }
   
    
}
module.exports = new Room();