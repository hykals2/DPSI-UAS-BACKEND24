const express = require('express');
const router = express.Router();
const surveyController = require('../controller/surveyController');
const auth = require('../middleware/auth');

router.post('/', auth(['employee','admin']), surveyController.createSurvey);
router.get('/', auth(['employee','admin']), surveyController.getAllSurveys);


module.exports = router;
