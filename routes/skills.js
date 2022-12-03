var express = require('express');
var router = express.Router();

const skillController = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillController.index);
router.get('/new', skillController.new);
router.get('/:id', skillController.show);
router.get('/:id/edit', skillController.edit);

/* POST route. */
router.post('/', skillController.create);

/* POST route. */
router.put('/:id', skillController.update);

/* DELETE route. */
router.delete('/:id', skillController.delete);

module.exports = router;
