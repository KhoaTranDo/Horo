const express = require('express');
const router = express.Router();

const roomControllers = require('../controllers/Room')


router.post('/add',roomControllers.addRoom)

module.exports = router;