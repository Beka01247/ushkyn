const express = require('express');

const router = express.Router();

router.post('/add-topic');
router.post('/edit-topic');
router.post('/delete-topic');
router.post('/add-user');
router.post('/edit-user');

router.post('/add-topics', requireAdmin, adminController.createTopic);
router.put('/edit-topics/:id', requireAdmin, adminController.updateTopic);
router.delete('/del-topics/:id', requireAdmin, adminController.deleteTopic);
router.post('/add-user', requireAdmin, adminController.addUser);
router.get('/users', requireAdmin, adminController.getUsers);
router.delete('/users/:id', requireAdmin, adminController.deleteUser);



module.exports = router;