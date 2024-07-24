const express = require('express');
const router = express.Router();
const technicalPlanController = require('../controller/technicalPlan');
const auth = require('../middleware/auth');

router.post('/', auth(['employee','admin']), technicalPlanController.createTechnicalPlan);
router.get('/', auth(['employee','admin']), technicalPlanController.getAllTechnicalPlans);


module.exports = router;
