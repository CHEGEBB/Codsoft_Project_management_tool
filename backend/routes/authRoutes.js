const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user sign up
router.post('/signup', authController.signup);
router.post('/login', authController.login); 

module.exports = router;