const express = require('express');
const router = express.Router();

const lessorControllers = require('../app/controllers/LessorControllers')

router.get('/hiddenlist/post', lessorControllers.hiddenPost)
router.get('/stores/post', lessorControllers.storesPost)


module.exports = router;