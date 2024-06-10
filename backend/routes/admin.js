const express = require('express');
const adminController = require('../controllers/adminController')
const requireAdmin = require('../middleware/adminMiddleware')

const router = express.Router();

router.post('/add-topics', requireAdmin, adminController.createTopic);
router.put('/edit-topics/:id', requireAdmin, adminController.updateTopic);
router.delete('/del-topics/:id', requireAdmin, adminController.deleteTopic);
router.post('/add-user', requireAdmin, adminController.addUser);
router.get('/users', requireAdmin, adminController.getUsers);
router.delete('/users/:id', requireAdmin, adminController.deleteUser);
router.put('/edit-users/:id', requireAdmin, adminController.updateUser);
router.put('/edit-topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/tests/:testId', adminController.updateQuestionName);
router.put('/edit-topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/tests/:testId/options/:optionId', adminController.updateTestOption);
router.post('/topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/addTest', adminController.addNewTest);
router.post('/topics/:topicId/subtopics/:subtopicId/subsubtopic/:subsubtopicId/tests/:testId/addOption', adminController.addNewOption);

module.exports = router;