const Topic = require('../models/topicModel');

// get all topics
const getTopics = async (req, res) => {
  const topic = await Topic.find({}).sort({createdAt: 1});
  res.status(200).json(topic);
}

// create new topic
const createTopic = async (req, res) => {
  const { title } = req.body;
  try {
    const topic = await Topic.create({ title });
    res.status(200).json({ topic });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// proverka 2

module.exports = {
  createTopic
}