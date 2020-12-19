const express = require("express");
const router = express.Router();

const roomControllers = require("../controllers/Room");
const Image = require("../controllers/ImageControlller");
const AddressSchema = require("../models/AddressModel");
const fileUpload = require("express-fileupload");

// Show Address
router.get("/Address", (res, req) => {
  try {
    AddressSchema.find({}, (err, result) => {
      if (err) console.log(err)
      req.json({
          result
      })
    console.log(result)
    });
  } catch (err) {
    res.json({
      result: false,
      message: err,
    });
  }
});
// Load All Room
router.get("/PostAllRoom", roomControllers.postAllRoom);
//
// PostName room Save Image
router.post("/picture", Image.PostImageRoom);
router.get("/add/Image=:imagename");
router.get("/detail/:slug", roomControllers.RoomDetail);
router.get("/PostByType", roomControllers.getRoomByType);
router.get("/LessorRoom/:slug", roomControllers.getRoomById);
router.get("/LessorRoom/edit/:id", roomControllers.upDateRoomById);
router.get("/LessorRoom/remove/:id", roomControllers.removeRoomById);
router.post("/LessorRoom/update/:id", roomControllers.updateRoom);
// Add New Room Finish
router.post("/add", roomControllers.addRoom);

// Manager Room
router.get("/ManagerRoom/ShowRoom");
router.post("/ManagerRoom/HidenRoom");

module.exports = router;
