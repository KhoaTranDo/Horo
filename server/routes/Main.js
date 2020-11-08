const express = require('express');
const router = express.Router();

const Homepage = require('../controllers/Homepage')
const AccountController = require('../controllers/Account')

router.get('/Add',Homepage.bg);
router.post('/Add',Homepage.upload);
router.get('/',AccountController.index);


module.exports = router;