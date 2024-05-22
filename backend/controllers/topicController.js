const { Topic } = require('../models/topicModel');

exports.createTopic = async (req, res) => {
  try {
    const newTopic = new Topic(req.body);
    await newTopic.save();
    res.status(201).json(newTopic); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).json({topics});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

