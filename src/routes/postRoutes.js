// src/routes/postRoutes.js
const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/', postController.listPosts);
router.get('/posts/new', postController.addPost);
router.get('/posts/edit', postController.editPost);


module.exports = router;
