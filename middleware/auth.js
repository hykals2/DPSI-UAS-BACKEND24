const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const auth = (roles = []) => {
  return async (req, res, next) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ where: { userId: decoded.userId } });

      if (!user || (roles.length && !roles.includes(user.role))) {
        return res.status(403).send({ error: 'Access denied.' });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error('Error in authentication middleware:', error);
      res.status(401).send({ error: 'Please authenticate.' });
    }
  };
};

module.exports = auth;
