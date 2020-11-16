const express = require('express');
const router = express.Router();

 const Homepage = require('../controllers/Homepage')
// const AccountController = require('../controllers/Account')

router.post('/gallery',Homepage.bg);
router.post('/extention',Homepage.upload);
// router.post('/map',Detail.showMap);
// router.get('/',Detail.index);



module.exports = router;