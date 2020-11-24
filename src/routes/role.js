const express = require('express');
const router = express.Router();

const roleControllers = require('../app/controllers/RoleControllers')

router.get('/search/show',roleControllers.search)
router.delete('/:id', roleControllers.delete)
router.put('/:id', roleControllers.edit)
router.post('/store', roleControllers.store)
router.get('/:id/update', roleControllers.update)
router.get('/create', roleControllers.create)
router.get('/:slug', roleControllers.show)
router.get('/', roleControllers.index)
module.exports = router;