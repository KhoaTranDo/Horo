const express = require('express');
const router = express.Router();

const loginControllers = require('../app/controllers/LoginControllers')

//newControllers.index

router.post('/access', loginControllers.access)
router.get('/', loginControllers.login)

module.exports = router;