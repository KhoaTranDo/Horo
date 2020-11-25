const express = require('express');
const cors= require('cors');
const app= express();
const connectToDatabase = require('./config/connectToDatabase');
const upload = require('./multer')
const bodyParser = require('body-parser')
const cloudinary = require('./cloudinary')
//Ket noi database
connectToDatabase();

//upload image
const fs = require('fs')
//router
const route = require('./routes');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json({extended: false}));

// app.use('/', require('./routes/users'));
// make a post request
app.use('/upload-images',upload.array('image'),async(req,res)=>{
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
            console.log(urls)
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
})

route(app);

const PORT = process.env.PORT || 6001;

app.listen(PORT,()=> console.log(`Server running on port :${PORT}`))