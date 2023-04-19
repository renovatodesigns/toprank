// src/controllers/postController.js
const postModel = require('../models/postModel');
const categoryModel = require('../models/categoryModel');

async function listPosts(req, res) {
  const posts = await postModel.getAllPosts();
  res.render('index', { posts, pageTitle: 'Home | Toprank' , showSidebar: true, showTopbar: true, activePage: "home", showEditNav: false});
  // console.log(posts);
}

async function addPost(req, res) {
  const categories = await categoryModel.getAllCategories();
  res.render('addPost', {pageTitle: 'Create Post | Toprank', categories , showSidebar: true, showTopbar: true, activePage: "addPost", showEditNav: false});
}

async function editPost(req, res) {
  const categories = await categoryModel.getAllCategories();
  res.render('editPost',{pageTitle: 'Edit Post | Toprank', categories , showSidebar: false, showTopbar: false, postId: req.query.postId, showEditNav: true, editTitle: "Edit Post",backId: "/home"});
}

module.exports = {
  listPosts,
  addPost,
  editPost,
};
