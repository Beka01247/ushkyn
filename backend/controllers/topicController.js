const Topic = require('../models/topicModel');

exports.getTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).json({topics});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

exports.getTopicsById = async (req, res) => {
  try {
    const topics = await Topic.findById(req.params.id);
    res.status(200).json({topics});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};