const express = require('express');
const router = express.Router();

const ManagerController = require('../controllers/ManagerController')
const roleControllers = require('../controllers/RoleControllers')

router.get('/stores/post',ManagerController.storesPost)

router.get('/update', ManagerController.Update)
router.get('/', roleControllers.create)
router.put('/:id', roleControllers.edit)
router.post('/store', roleControllers.store)
router.get('/:slug', roleControllers.show)
router.get('/', roleControllers.index)

module.exports = router;