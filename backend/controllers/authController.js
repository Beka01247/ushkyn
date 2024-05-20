const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3h'});
}

exports.getLogin = (req, res, next) => {
  res.json({mssg: 'get login'})
}

exports.loginUser = async (req, res, next) => {
  const { phone, password } = req.body;

  try {
    const user = await User.login(phone, password);
    const token = createToken(user._id);
    res.status(200).json({ phone, token });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}

exports.signup = async (req, res) => {
  const {phone, password, school, city, grade, name} = req.body;

  try {
    const user = await User.signup(phone, password, school, city, grade, name);
    res.status(200).json(user);
  } catch (err) { 
    res.status(400).json({err: err.message});
  }
}