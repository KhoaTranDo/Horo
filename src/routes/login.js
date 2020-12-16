const express = require('express');
const router = express.Router();

const loginControllers = require('../app/controllers/LoginControllers')

//newControllers.index

router.post('/', loginControllers.access)
router.get('/cookie', (req, res, next) => {
    res.cookie('email',12345)
    res.send('hello')
})
router.get('/', loginControllers.login)

module.exports = router;