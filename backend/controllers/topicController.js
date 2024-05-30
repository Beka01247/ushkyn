const Topic = require('../models/topicModel');

exports.getTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).json({topics});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};