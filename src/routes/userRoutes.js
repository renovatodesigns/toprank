// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/new', userController.newUser);
router.get('/edit', userController.editUser);
router.get('/manage', userController.manageUser);

module.exports = router;