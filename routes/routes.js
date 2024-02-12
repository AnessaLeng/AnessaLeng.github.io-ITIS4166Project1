const express = require('express');
const controller = require('../controllers/controllers.js');

const router = express.Router();

router.get('/', controller.index);

router.get('/new', controller.new);

router.get('/', controller.create);

router.get('/:id', controller.show);

router.get('/:id/edit', controller.edit);

router.get('/:id', controller.update);

router.get('/:id', controller.delete);

module.exports = router;