const express = require('express');
const Topic = require('../models/topicModel');
const {
  createTopic
} = require('../controllers/topicController')

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get api' });
});

router.post('/', createTopic);

module.exports = router;
