
const Survey = require('../models/Survey');

exports.createSurvey = async (req, res) => {
  const {surveyDate, surveyResult, comments, requestId } = req.body;
  try {
    const survey = await Survey.create({
    surveyDate,
    surveyResult,
    comments,
    requestId,
    tecnicialId: req.user.userId,
    });
    res.status(201).json(survey);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.findAll();
    res.status(200).json(surveys);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
