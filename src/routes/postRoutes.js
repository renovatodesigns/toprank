// src/routes/postRoutes.js
const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/', postController.listPosts);
router.get('/posts/new', postController.addPost);
router.get('/posts/edit', postController.editPost);
router.get('/posts/view', postController.viewPost);
router.get('/posts/announcement', postController.announcementPost);
router.get('/posts/filter', postController.filterPost);
router.get('/posts', postController.filter);



module.exports = router;
