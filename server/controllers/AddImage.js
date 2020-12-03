
const ImageRoomSchema = require('../models/ImageRoom');

const cloudinary = require('../cloudinary')
//upload image
const fs = require('fs')

class AddImage {
    async Upload(req,res){
        const uploader = async (path) => await cloudinary.uploads(path,'Images')
        if(req.method==='POST')
        {
            const urls =[]
            const files = req.files
            for(const file of files){
                const{path}=file
                const newPath = await uploader(path)
                urls.push(newPath)
                fs.unlinkSync(path)
                console.log(urls[0])
                const cloudinary_id=urls[0].id
                const imageUrl=urls[0].url
                console.log(imageUrl)
               var img= new ImageRoomSchema({cloudinary_id,imageUrl})
                img.save(function(err,result){
                    res.json.result
                })
            }
            res.status(200).json({
                message: "Images Uploaded Successfully",
                data: urls
            })
        }else {
            res.status(405).json({
                err:'Image not uploaded  Successfully'
            })
        }
    }
    
}
module.exports = new AddImage();