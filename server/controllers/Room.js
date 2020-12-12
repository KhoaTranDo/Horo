const RoomSchema = require('../models/RoomModel');
const path = require('path')
class Room { 
    async addRoom(req,res){
        try{     
            let {Size,NumberRoom,NumberPeople,address,roomtype,image,feature,genderRules,describe,firstprice,prices,UserID,title}=req.body;
           const room= new RoomSchema({UserID,properties:{
                    Size,
                    NumberRoom,
                    NumberPeople,
                    address,
                    roomtype,
                    title,
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
            return res.status(500).json({ message: "Post Room not Success"});
        }
    }
    // Detail room
    async RoomDetail(req,res){
        try{
            await RoomSchema.find({"properties.slug":req.params.slug},(err,result)=>{
                    if(err) console.log(err);
                    res.json({
                        news:result
                })
            })    
        }catch(err){
            res.json({
                result:false,
                message:err
            })
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
    //Select address
    async getAddress(req,res){

    }
    async getRoomById(req,res){
        // let {id}=req.body.id
        try{
           const Room= await RoomSchema.find({'UserID':'5fc9c761664ad617f42d76c6'},(err,result)=>{
                if(err) console.log(err)
            })
            console.log(Room)
        }catch(err){
            res.json({
                result:false,
                message:err
            })
        }
    }
    async upDateRoomById(req,res){
        // let {id}=req.body.id
        try{
           const Room= await RoomSchema.updateOne({'_id':req.params.slug},{'properties.NumberRoom':'200'},(err,result)=>{
                if(err) console.log(err)
            })
            console.log(Room)
        }catch(err){
            res.json({
                result:false,
                message:err
            })
        }
    }
    async UpdateRoomById(req,res){
        // let {id}=req.body.id
        try{
            await RoomSchema.find({'UserID':'5fc9c761664ad617f42d76c6'},(err,result)=>{
                if(err) console.log(err)
                console.log(result)
            })
        }catch(err){
            res.json({
                result:false,
                message:err
            })
        }
    }
   
}
module.exports = new Room();