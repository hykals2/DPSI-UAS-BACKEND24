const express = require('express');
const router = express.Router();
const propertyController = require('../controller/propertyController');
const auth = require('../middleware/auth');

router.post('/', auth('customer'), propertyController.createProperty);
router.get('/', auth(['employee','admin']), propertyController.getAllProperties);

module.exports = router;
