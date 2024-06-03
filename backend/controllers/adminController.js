const Topic = require('../models/topicModel')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.createTopic = async (req, res) => {
  try {
    const newTopic = new Topic(req.body);
    await newTopic.save();
    res.status(201).json(newTopic); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTopic = async (req, res) => {
  try {
    const updatedTopic = await Topic.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTopic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteTopic = async (req, res) => {
  try {
    await Topic.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Тарау өшірілді' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addUser = async (req, res) => {
  const {phone, password, school, city, grade, name} = req.body;

  try {
    const user = await User.signup(phone, password, school, city, grade, name);
    res.status(200).json(user);
  } catch (err) { 
    res.status(400).json({error: error.message});
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({isAdmin: false});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Пайдаланушы өшірлді' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

