const express = require('express');
const router = express.Router();

const roomControllers = require('../controllers/Room')
const Image = require('../controllers/ImageControlller')
const fileUpload = require("express-fileupload")

// Address
router.get("/Address")
// Load All Room
router.get('/PostAllRoom',roomControllers.postAllRoom)
// 
// PostName room Save Image
router.post("/picture", Image.PostImageRoom )
router.get("/add/Image=:imagename")
router.get('/detail/:slug',roomControllers.RoomDetail)
router.post("/picture/Delete")
router.get('/LessorRoom',roomControllers.getRoomById)
router.get('/LessorRoom/:slug',roomControllers.upDateRoomById)
// Add New Room Finish
router.post('/add',roomControllers.addRoom)

// Manager Room
router.get("/ManagerRoom/ShowRoom")
router.post("/ManagerRoom/HidenRoom")


module.exports = router;