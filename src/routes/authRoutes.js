// src/routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', authController.signIn);
router.get('/signup', authController.signUp);

module.exports = router;
