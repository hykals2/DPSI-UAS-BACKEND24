// controllers/installationController.js

const Installation = require('../models/Installation');

exports.createInstallation = async (req, res) => {
  const {installationDate, status, requestId} = req.body;
  try {
    const installation = await Installation.create({
        installationDate,
        status,
        requestId,
        tecnicialId: req.user.userId,
    });
    res.status(201).json(installation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllInstallations = async (req, res) => {
  try {
    const installations = await Installation.findAll();
    res.status(200).json(installations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

