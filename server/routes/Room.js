const express = require('express');
const router = express.Router();

const roomControllers = require('../controllers/Room')
const fileUpload = require("express-fileupload")

router.post('/add',roomControllers.addRoom)
router.get('/PostAllRoom',roomControllers.postAllRoom)
router.post("/picture", async (req, res) => {
  try {
    if(!req.files){
      res.send({
        status: false,
        message: "No files"
      })
    } else {
      const {picture} = req.files

      picture.mv("./uploads/" + picture.name)

      res.send({
        status: true,
        message: "File is uploaded"
      })
    }
  } catch (e) {
    res.status(500).send(e)
  }
})
module.exports = router;