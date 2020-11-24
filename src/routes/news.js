const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/NewsControllers')

//newControllers.index

router.use('/', newsControllers.index )

module.exports=router;