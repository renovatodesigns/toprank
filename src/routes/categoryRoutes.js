const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/new', categoryController.newCategory);
router.get('/manage', categoryController.manageCategory);
router.get('/edit', categoryController.editCategory);

module.exports = router;