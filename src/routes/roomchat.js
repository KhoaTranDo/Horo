const express = require('express');
const router = express.Router();

const chatControllers = require('../app/controllers/ChatControllers')

//newControllers.index

router.get('/chat',chatControllers.connect)
router.get('/', chatControllers.index)

module.exports = router;