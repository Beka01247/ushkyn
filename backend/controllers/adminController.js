const Topic = require("../models/topicModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.createTopic = async (req, res) => {
  try {
    const newTopic = new Topic(req.body);
    await newTopic.save();
    res.status(201).json(newTopic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTopic = async (req, res) => {
  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedTopic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateQuestionName = async (req, res) => {
  const { topicId, subtopicId, subsubtopicId, testId } = req.params;
  const updatePath = `subtopics.$[subtopic].subsubtopics.$[subsubtopic].tests.$[test].${req.body.fieldToUpdate}`;

  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      topicId,
      {
        $set: {
          [updatePath]: req.body.newValue,
        },
      },
      {
        new: true,
        arrayFilters: [
          { "subtopic._id": subtopicId },
          { "subsubtopic._id": subsubtopicId },
          { "test._id": testId },
        ],
      }
    );

    res.status(200).json(updatedTopic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTestOption = async (req, res) => {
  const { topicId, subtopicId, subsubtopicId, testId, optionId } = req.params;
  const updateFieldPath = `subtopics.$[subtopic].subsubtopics.$[subsubtopic].tests.$[test].options.$[option].${req.body.fieldToUpdate}`;

  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      topicId,
      {
        $set: {
          [updateFieldPath]: req.body.newValue,
        },
      },
      {
        new: true,
        arrayFilters: [
          { "subtopic._id": subtopicId },
          { "subsubtopic._id": subsubtopicId },
          { "test._id": testId },
          { "option._id": optionId },
        ],
      }
    );

    res.status(200).json(updatedTopic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addNewTest = async (req, res) => {
  const { topicId, subtopicId, subsubtopicId } = req.params;
  const { newTest } = req.body;

  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      topicId,
      {
        $push: {
          [`subtopics.$[subtopic].subsubtopics.$[subsubtopic].tests`]: newTest,
        },
      },
      {
        new: true,
        arrayFilters: [
          { "subtopic._id": subtopicId },
          { "subsubtopic._id": subsubtopicId },
        ],
      }
    );

    res.status(200).json(updatedTopic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addNewOption = async (req, res) => {
  const { topicId, subtopicId, subsubtopicId, testId } = req.params;
  const { newOption } = req.body;

  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      topicId,
      {
        $push: {
          [`subtopics.$[subtopic].subsubtopics.$[subsubtopic].tests.$[test].options`]:
            newOption,
        },
      },
      {
        new: true,
        arrayFilters: [
          { "subtopic._id": subtopicId },
          { "subsubtopic._id": subsubtopicId },
          { "test._id": testId },
        ],
      }
    );

    res.status(200).json(updatedTopic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addSingleCorrectAnswer = async (req, res) => {
  const { topicId, subtopicId, subsubtopicId, testId } = req.params;
  const { newAnswer } = req.body;

  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      topicId,
      {
        $set: {
          [`subtopics.$[subtopic].subsubtopics.$[subsubtopic].tests.$[test].singleCorrectAnswer`]:
            newAnswer,
        },
      },
      {
        new: true,
        arrayFilters: [
          { "subtopic._id": subtopicId },
          { "subsubtopic._id": subsubtopicId },
          { "test._id": testId },
        ],
      }
    );

    res.status(200).json(updatedTopic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addVideoExplanation = async (req, res) => {
  const { topicId, subtopicId, subsubtopicId, testId } = req.params;
  const { newVideo } = req.body;

  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      topicId,
      {
        $set: {
          [`subtopics.$[subtopic].subsubtopics.$[subsubtopic].tests.$[test].videoExplanation`]:
            newVideo,
        },
      },
      {
        new: true,
        arrayFilters: [
          { "subtopic._id": subtopicId },
          { "subsubtopic._id": subsubtopicId },
          { "test._id": testId },
        ],
      }
    );

    res.status(200).json(updatedTopic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addTextExplanation = async (req, res) => {
  const { topicId, subtopicId, subsubtopicId, testId } = req.params;
  const { newText } = req.body;

  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      topicId,
      {
        $set: {
          [`subtopics.$[subtopic].subsubtopics.$[subsubtopic].tests.$[test].textExplanation`]:
            newText,
        },
      },
      {
        new: true,
        arrayFilters: [
          { "subtopic._id": subtopicId },
          { "subsubtopic._id": subsubtopicId },
          { "test._id": testId },
        ],
      }
    );

    res.status(200).json(updatedTopic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTextExplanation = async (req, res) => {
  const { topicId, subtopicId, subsubtopicId, testId } = req.params;

  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      topicId,
      {
        $set: {
          [`subtopics.$[subtopic].subsubtopics.$[subsubtopic].tests.$[test].textExplanation`]:
            "",
        },
      },
      {
        new: true,
        arrayFilters: [
          { "subtopic._id": subtopicId },
          { "subsubtopic._id": subsubtopicId },
          { "test._id": testId },
        ],
      }
    );

    if (!updatedTopic) {
      return res.status(404).json({
        message:
          "No topic found with the given ID or test not found within the topic.",
      });
    }

    res.status(200).json(updatedTopic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteVideoExplanation = async (req, res) => {
  const { topicId, subtopicId, subsubtopicId, testId } = req.params;

  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      topicId,
      {
        $set: {
          [`subtopics.$[subtopic].subsubtopics.$[subsubtopic].tests.$[test].videoExplanation`]:
            "",
        },
      },
      {
        new: true,
        arrayFilters: [
          { "subtopic._id": subtopicId },
          { "subsubtopic._id": subsubtopicId },
          { "test._id": testId },
        ],
      }
    );

    if (!updatedTopic) {
      return res.status(404).json({
        message:
          "No topic found with the given ID or test not found within the topic.",
      });
    }

    res.status(200).json(updatedTopic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTopic = async (req, res) => {
  try {
    await Topic.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Тарау өшірілді" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addUser = async (req, res) => {
  const { phone, password, school, city, grade, name } = req.body;

  try {
    const user = await User.signup(phone, password, school, city, grade, name);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({ isAdmin: false });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    let updatedFields = req.body;
    if (updatedFields.password) {
      const salt = await bcrypt.genSalt(10);
      updatedFields.password = await bcrypt.hash(updatedFields.password, salt);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Пайдаланушы өшірлді" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTest = async (req, res) => {
  const { topicId, subtopicId, subsubtopicId, testId } = req.params;

  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      topicId,
      {
        $pull: {
          [`subtopics.$[subtopic].subsubtopics.$[subsubtopic].tests`]: {
            _id: testId,
          },
        },
      },
      {
        new: true,
        arrayFilters: [
          { "subtopic._id": subtopicId },
          { "subsubtopic._id": subsubtopicId },
        ],
      }
    );

    if (!updatedTopic) {
      return res.status(404).json({
        message:
          "No topic found with the given ID or test not found within the topic.",
      });
    }

    res.status(200).json(updatedTopic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTestOption = async (req, res) => {
  const { topicId, subtopicId, subsubtopicId, testId, optionId } = req.params;

  try {
    const updatedTest = await Topic.findByIdAndUpdate(
      topicId,
      {
        $pull: {
          ["subtopics.$[subtopic].subsubtopics.$[subsubtopic].tests.$[test].options"]:
            { _id: optionId },
        },
      },
      {
        new: true,
        arrayFilters: [
          { "subtopic._id": subtopicId },
          { "subsubtopic._id": subsubtopicId },
          { "test._id": testId },
        ],
      }
    );

    if (!updatedTest) {
      return res.status(404).json({ message: "No option found." });
    }

    res.status(200).json(updatedTest);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};
