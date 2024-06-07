const express = require('express');
const Topic = require('../models/topicModel');
const topicController = require('../controllers/topicController')

const router = express.Router();

// all topics
router.get('/', topicController.getTopics);
router.get('/:id', topicController.getTopicsById)

module.exports = router;