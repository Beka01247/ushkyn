const express = require("express");
const adminController = require("../controllers/adminController");
const requireAdmin = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/add-topics", requireAdmin, adminController.createTopic);
router.put("/edit-topics/:id", requireAdmin, adminController.updateTopic);
router.delete("/del-topics/:id", requireAdmin, adminController.deleteTopic);
router.post("/add-user", requireAdmin, adminController.addUser);
router.get("/users", requireAdmin, adminController.getUsers);
router.delete("/users/:id", requireAdmin, adminController.deleteUser);
router.put("/edit-users/:id", requireAdmin, adminController.updateUser);
router.put(
  "/edit-topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/tests/:testId",
  requireAdmin,
  adminController.updateQuestionName
);
router.put(
  "/edit-topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/tests/:testId/options/:optionId",
  requireAdmin,
  adminController.updateTestOption
);
router.post(
  "/topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/addTest",
  requireAdmin,
  adminController.addNewTest
);
router.post(
  "/topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/tests/:testId/addOption",
  requireAdmin,
  adminController.addNewOption
);
router.post(
  "/topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/tests/:testId/addAnswer",
  requireAdmin,
  adminController.addSingleCorrectAnswer
);
router.post(
  "/topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/tests/:testId/addVideoExp",
  requireAdmin,
  adminController.addVideoExplanation
);
router.post(
  "/topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/tests/:testId/addTextExp",
  requireAdmin,
  adminController.addTextExplanation
);
router.delete(
  "/topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/tests/:testId/deleteTextExp",
  requireAdmin,
  adminController.deleteTextExplanation
);
router.delete(
  "/topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/tests/:testId/deleteVideoExp",
  requireAdmin,
  adminController.deleteVideoExplanation
);
router.delete(
  "/topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/tests/:testId/delete",
  requireAdmin,
  adminController.deleteTest
);
router.delete(
  "/topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/tests/:testId/options/:optionId/delete",
  requireAdmin,
  adminController.deleteTestOption
);

module.exports = router;
