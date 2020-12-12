const express = require('express');
const router = express.Router();

const image = require("../controllers/ImageControlller")
const AccountController = require('../controllers/Account')

//router.get('/loadBg',image.loadBackground);
router.post('/Add',image.upload);
router.get('/',AccountController.index);
router.get('/RoomInformation')
router.get('RoomInformation/:id')
router.get('RoomInformation/city/:city')
router.get("RoomInformation/dictrict/:dictric")
router.get("/Search/")


module.exports = router;