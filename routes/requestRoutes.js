const express = require('express');
const requestController = require('../controller/requestController');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/requests', auth('customer'), requestController.createRequest);
router.get('/requests', auth(['employee','admin']), requestController.getRequests);

module.exports = router;
