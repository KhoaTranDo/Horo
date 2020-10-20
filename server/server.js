const express = require('express');
const cors= require('cors');
const app= express();
const connectToDatabase = require('./config/connectToDatabase');

//Ket noi database
connectToDatabase();

app.use(cors())
app.use(express.json({extended: false}));

app.use('/', require('./routes/users'));


const PORT = process.env.PORT || 6001;

app.listen(PORT,()=> console.log(`Server running on port :${PORT}`))