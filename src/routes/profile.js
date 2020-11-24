const express = require('express');
const router = express.Router();

const profileControllers = require('../app/controllers/ProfileControllers')

//newControllers.index

router.get('/', profileControllers.index)


module.exports = router;