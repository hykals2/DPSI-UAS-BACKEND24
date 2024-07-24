const Document = require('../models/Document');

exports.uploadDocument = async (req, res) => {
  const { documentType, status, userId } = req.body;
  const documentPath = req.file ? req.file.path: null;
  try {
    const document = await Document.create({
      documentType,
      documentPath,
      status,
      uploadDate: new Date(),
      userId
    });
    res.status(201).send(document);
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
};

exports.getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.findAll();
    res.status(200).json(documents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};