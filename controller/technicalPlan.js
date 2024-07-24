const TechnicalPlan = require('../models/TechnicalPlan');

exports.createTechnicalPlan = async (req, res) => {
  try {
    const technicalPlan = await TechnicalPlan.create(req.body);
    res.status(201).json(technicalPlan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllTechnicalPlans = async (req, res) => {
  try {
    const technicalPlans = await TechnicalPlan.findAll();
    res.status(200).json(technicalPlans);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
