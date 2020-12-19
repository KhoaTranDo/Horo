const express = require('express');
const cors= require('cors');
const app= express();
const connectToDatabase = require('./config/connectToDatabase');
const upload = require('./multer')
const bodyParser = require('body-parser')
//Loi up hinh len cloudbinary
const fileUpload = require("express-fileupload")

//Ket noi database
connectToDatabase();
const UploadImage = require('./controllers/ImageControlller')

//router
const route = require('./routes');
const { url } = require('inspector');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(express.json({extended: false}));
//public folde 
app.use(express.static("uploads"));
// app.use('/', require('./routes/users'));
// make a post request
app.use('/upload-images',upload.array('image'),UploadImage.Upload)
      app.use(fileUpload({
          createParentPath: true
        }))

route(app);


const PORT = process.env.PORT || 6001;

app.listen(PORT,()=> console.log(`Server running on port :${PORT}`))