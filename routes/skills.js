var express = require('express');
var router = express.Router();

const skillController = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillController.index);

module.exports = router;
