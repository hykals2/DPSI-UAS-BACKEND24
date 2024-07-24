const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const requestRoutes = require('./routes/requestRoutes');
const documentRoutes = require('./routes/documentRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const surveyRoutes = require('./routes/surveyRoutes');
const technicalPlanRoutes = require('./routes/technicalPlanRoutes');
const installationRoutes = require('./routes/installationRoutes')


require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/api', requestRoutes);
app.use('/api', documentRoutes);
app.use('/properties', propertyRoutes);
app.use('/surveys', surveyRoutes);
app.use('/technical-plans', technicalPlanRoutes);
app.use('/installations', installationRoutes);

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
});


sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(error => {
  console.log('Unable to connect to the database:', error);
});

module.exports = app;