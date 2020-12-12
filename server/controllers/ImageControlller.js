const ImageRoomSchema = require("../models/ImageRoom");
const BackgroundSchema = require("../models/Background");
const cloudinary = require("../cloudinary");
const config = require("config");
//upload image
const fs = require("fs");

class AddImage {
// Upload to cloudbinary
  async Upload(req, res) {
    const uploader = async (path) => await cloudinary.uploads(path, "Images");
    if (req.method === "POST") {
      console.log(uploader);
      const urls = [];
      const files = req.files;
      for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path);
        urls.push(newPath);
        fs.unlinkSync(path);
        console.log(urls[0]);
        const cloudinary_id = urls[0].id;
        const imageUrl = urls[0].url;
        console.log(imageUrl);
        var img = new ImageRoomSchema({ cloudinary_id, imageUrl });
        img.save(function (err, result) {
          res.json.result;
        });
      }
      res.status(200).json({
        message: "Images Uploaded Successfully",
        data: urls,
      });
    } else {
      res.status(405).json({
        err: "Image not uploaded  Successfully",
      });
    }
  }
  // Upload ImageRoom
  async PostImageRoom(req,res){
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
  }
// Load Background
  async loadBackground(req,res){
    try{
       const BackgroundSchemas = await BackgroundSchema.find();
       res.json(BackgroundSchemas);
   }catch(err){
       res.json({message:err});
   };
 }
  async upload(req,res){
       try{
       const course=new BackgroundSchema(req.body);
       course.save()
       }
       catch(err){
           res.json({message: err});
       }
   }
//End
}

module.exports = new AddImage();
