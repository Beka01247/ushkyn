const mongoose = require("mongoose");
const { Schema } = mongoose;

const TestOptionSchema = new Schema({
  text: String,
  isCorrect: Boolean,
});

const TestSchema = new Schema({
  question: String,
  type: {
    type: String,
    enum: ["multiple-choice", "single-answer", "single-choice"],
    default: "multiple-choice",
  },
  options: {
    type: [TestOptionSchema],
    required: function () {
      return this.type === "multiple-choice" || this.type === "single-choice";
    },
  },
  singleCorrectAnswer: {
    type: String,
    required: function () {
      return this.type === "single-answer";
    },
  },
  videoExplanation: String,
  textExplanation: String,
});

TestSchema.pre("save", function (next) {
  if (this.type === "single-choice") {
    const correctCount = this.options.filter(
      (option) => option.isCorrect
    ).length;
    if (correctCount !== 1) {
      next(
        new Error("Single-choice test must have exactly one correct option.")
      );
    }
  }
  next();
});

const SubsubtopicSchema = new Schema({
  title: String,
  videos: [String],
  tests: [TestSchema],
});

const SubtopicSchema = new Schema({
  title: String,
  subsubtopics: [SubsubtopicSchema],
});

const TopicSchema = new Schema({
  title: String,
  subtopics: [SubtopicSchema],
});

const Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;
