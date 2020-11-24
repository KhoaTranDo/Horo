const express = require('express');
const router = express.Router();

const homeControllers = require('../app/controllers/HomeControllers')

router.get('/', homeControllers.index)
module.exports = router;