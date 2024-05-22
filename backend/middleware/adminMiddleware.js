const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAdmin = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decoded._id);

    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: 'Access denied' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = requireAdmin;
