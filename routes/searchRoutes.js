const express = require('express');
const controller = require('../controllers/mangaControllers');

const router = express.Router();

router.get('/', controller.search);

module.exports = router;