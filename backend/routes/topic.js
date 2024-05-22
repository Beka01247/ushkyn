const express = require('express');
const Topic = require('../models/topicModel');
const topicController = require('../controllers/topicController')

const router = express.Router();

router.post('/add-topic', topicController.createTopic);
router.get('/all-topics', topicController.getTopics);

module.exports = router;