const express = require('express');
const cors= require('cors');
const app= express();
const connectToDatabase = require('./config/connectToDatabase');
const upload = require('./multer')
const bodyParser = require('body-parser')


//Ket noi database
connectToDatabase();
const UploadImage = require('./controllers/AddImage')

//router
const route = require('./routes');
const { url } = require('inspector');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json({extended: false}));

// app.use('/', require('./routes/users'));
// make a post request
app.use('/upload-images',upload.array('image'),UploadImage.Upload)

route(app);

const PORT = process.env.PORT || 6001;

app.listen(PORT,()=> console.log(`Server running on port :${PORT}`))