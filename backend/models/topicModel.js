const mongoose = require('mongoose');
const { Schema } = mongoose;

const TestOptionSchema = new Schema({
  text: String,
  isCorrect: Boolean
});

const TestSchema = new Schema({
  question: String,
  options: [TestOptionSchema],
  videoExplanation: String
});

const SubsubtopicSchema = new Schema({
  title: String,
  videos: [String],
  tests: [TestSchema]
});

const SubtopicSchema = new Schema({
  title: String,
  subsubtopics: [SubsubtopicSchema]
});

const TopicSchema = new Schema({
  title: String,
  subtopics: [SubtopicSchema]
});

const Topic = mongoose.model('Topic', TopicSchema);

module.exports = {
  Topic
};
