const express = require('express');
const controller = require('../controllers/mangaControllers');
const { upload } = require('../middleware/fileUpload');

const router = express.Router();

router.get('/', controller.index);

router.get('/all', controller.all);

router.get('/new', controller.new);

router.post('/', upload, controller.create);

router.get('/:id', controller.show);

router.get('/:id/edit', controller.edit);

router.put('/:id', upload, controller.update);

router.delete('/:id', controller.delete);

module.exports = router;