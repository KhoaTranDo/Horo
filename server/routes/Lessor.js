const express = require('express');
const router = express.Router();

const lessorControllers = require('../controllers/LessorControllers')
const roleControllers = require('../controllers/RoleControllers')

router.get('/stores/post',lessorControllers.storesPost)
router.get('/:id/update', roleControllers.update)
router.get('/create', roleControllers.create)
router.put('/:id', roleControllers.edit)
router.post('/store', roleControllers.store)
router.get('/:slug', roleControllers.show)
router.get('/', roleControllers.index)
module.exports = router;