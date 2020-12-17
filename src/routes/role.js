const express = require('express');
const router = express.Router();

const roleControllers = require('../app/controllers/RoleControllers')

// router.get('/feedback',roleControllers.review)
// router.put('/:slug', roleControllers.feedback)
router.get('/search', roleControllers.search)
router.delete('/:id', roleControllers.delete)
router.put('/:id', roleControllers.edit)
router.patch('/:id/cancel', roleControllers.cancel)
router.post('/store', roleControllers.store)
router.get('/:id/update', roleControllers.update)
router.post('/create', roleControllers.create)
router.get('/create', roleControllers.create)
router.get('/:slug', roleControllers.show)
router.get('/', roleControllers.index)
module.exports = router;