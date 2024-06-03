const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id, isAdmin) => {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: isAdmin ? '24h' : '3h'});
}

exports.getLogin = (req, res, next) => {
  res.json({mssg: 'get login'})
}

exports.loginUser = async (req, res, next) => {
  const { phone, password } = req.body;

  try {
    const user = await User.login(phone, password);
    const token = createToken(user._id, user.isAdmin);
    res.status(200).json({ phone, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

/*
const checkMultipleLogins = async (user, sessionId) => {
  if (user.activeSession && user.activeSession !== sessionId) {
    user.multipleLoginAttempts += 1;
    if (user.multipleLoginAttempts >= 10) {
      user.banned = true;
    }
  } else {
    user.multipleLoginAttempts = 0;
  }
  user.activeSession = sessionId;
  await user.save();
};

*/