const express = require('express');
const router = express.Router();

const registerControllers = require('../app/controllers/RegisterController')

//newControllers.index

// router.use('/:slug',newsControllers.selectRoles)
// router.get('/signup', registerControllers.create)
router.post('/store', registerControllers.store)
router.post('/create', registerControllers.create)
router.get('/', registerControllers.index)

module.exports = router;