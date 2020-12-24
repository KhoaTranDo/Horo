const RoomSchema = require("../models/RoomModel");
const path = require("path");
class Room {
  async addRoom(req, res) {
    try {
      let {
        Size,
        NumberRoom,
        NumberPeople,
        address,
        roomtype,
        image,
        feature,
        genderRules,
        describe,
        prices,
        UserID,
        title,
      } = req.body;
      const room = new RoomSchema({
        UserID,
        properties: {
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
          prices,
          image,
        },
      });
      room.save();
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Post Room not Success" });
    }
  }
  // Detail room
  async RoomDetail(req, res) {
    try {
      await RoomSchema.find(
        { "properties.slug": req.params.slug },
        (err, result) => {
          if (err) console.log(err);
          res.json({
            news: result,
          });
        }
      );
    } catch (err) {
      res.json({
        result: false,
        message: err,
      });
    }
  }

  async postAllRoom(req, res) {
    try {
      const postRoom = await RoomSchema.find();
      res.json(postRoom);
    } catch (err) {
      res.json({ message: err });
    }
  }
  //Select address
  async getAddress(req, res) {}
  //Get room by Main room
  async getRoomById(req, res) {
    let id = req.params.slug;
    try {
      await RoomSchema.find({ UserID: id }, (err, result) => {
        if (err) console.log(err);
        res.json(result);
      }).sort({ timestamp: -1 });
    } catch (err) {
      res.json({
        result: false,
        message: err,
      });
    }
  }
  async getRoomByType(req, res) {
    let { type } = res.body;
    try {
      const Room = await RoomSchema.find(
        { "properties.roomtype": type },
        (err, result) => {
          if (err) console.log(err);
        }
      );
      // console.log(Room)
    } catch (err) {
      res.json({
        result: false,
        message: err,
      });
    }
  }
  // Load Room by Room id
  async upDateRoomById(req, res) {
    let id = req.params.id;
    try {
      const Room = await RoomSchema.findById(id, (err, result) => {
        if (err) console.log(err);
        res.json(result);
        console.log(result);
      });
    } catch (err) {
      res.json({
        result: false,
        message: err,
      });
    }
  }
  //Let update Room
  async updateRoom(req, res) {
    let {
      title,
      image,
      Size,
      roomtype,
      NumberRoom,
      NumberPeople,
      feature,
      genderRules,
      describe,
      prices,
    } = req.body;

    // RoomSchema.updateOne(req.params.id,(err,room)=>{
    //     if(err) console.log(err)
    //     else{
    //         console.log(room)
    //         console.log(room.properties.title)
    //         //result.properties.title = new value(req.body.title)
    //         //result.save().then(up=>{res.json("Update Success")})
    //         //.catch(err=>{res.status(400).send("unable to update the database");})
    //     }
    // })
    try {
      await RoomSchema.updateOne(
        { _id: req.params.id },
        {
          "properties.title": title,
          "properties.image": image,
          "properties.Size": Size,
          "properties.NumberRoom":NumberRoom,
         "properties.NumberPeople":NumberPeople,
          "properties.roomtype":roomtype,
          "properties.feature":feature,
          "properties.genderRules":genderRules,
          "properties.describe":describe,
          "properties.prices":prices,
      
        },
        (err, room) => {
          if (err) res.json(err);
          else res.json("Change Successfully ");
        }
      );
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: "Server Error..." });
    }
  }

  //Remove Room
  async removeRoomById(req, res) {
    RoomSchema.findByIdAndRemove({ _id: req.params.id }, (err, room) => {
      if (err) res.json(err);
      else res.json("Successfully Remove");
    });
  }
  //Hiden Room
  async hidenRoomById(req, res) {
    let { id, status } = req.body;
    try {
      await RoomSchema.updateOne(
        { _id: id },
        { "properties.status": status },
        (err, room) => {
          if (err) res.json(err);
          else res.json("Change Successfully ");
        }
      );
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: "Server Error..." });
    }
  }
}
module.exports = new Room();
