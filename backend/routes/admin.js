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
router.post('/edit-users/:id', requireAdmin, adminController.updateUser);



module.exports = router;