const express = require('express')
const User = require('../models/userModel')

const authController = require('../controllers/authController')

const router = express.Router()

router.post('/login', authController.loginUser);

module.exports = router;