const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtopics: [{
    title: String,
    videos: [{
      title: String,
      url: String
    }],
    tests: [{
      title: String,
      questions: [{
        question_text: String,
        correct_answer: String,
        explanation_video: {
          title: String,
          url: String
        }
      }]
    }]
  }]
});

module.exports = mongoose.model('Topic', topicSchema);
