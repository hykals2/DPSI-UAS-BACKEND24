const express = require('express');
const router = express.Router();
const installationController = require('../controller/installationController');
const auth = require('../middleware/auth');

router.post('/', auth(['employee','admin']), installationController.createInstallation);
router.get('/', auth(['employee','admin']), installationController.getAllInstallations);


module.exports = router;
