const Request = require('../models/Request');
const Property = require('../models/Property');

exports.createRequest = async (req, res) => {
  const { propertyId, status,requestDate } = req.body;
  try {
    const request = await Request.create({
      userId: req.user.userId,
      propertyId,
      requestDate,
      status
    });
    res.status(201).send(request);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getRequests = async (req, res) => {
  try {
    const requests = await Request.findAll();
    res.send(requests);
  } catch (error) {
    res.status(400).send(error);
  }
};
