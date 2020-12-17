const express = require('express');
const router = express.Router();

const adminControllers = require('../app/controllers/AdminControllers')

router.get('/:id/update', adminControllers.update)
router.put('/:id', adminControllers.edit)

router.get('/userlist', adminControllers.usersPost)


module.exports = router;