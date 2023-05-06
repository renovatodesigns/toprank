// src/controllers/postController.js
const postModel = require('../models/postModel');
const categoryModel = require('../models/categoryModel');

let css = "/assets/css/styles.css";
let showOthers = false;

async function listPosts(req, res) {
  const posts = await postModel.getAllPosts();
  res.render('index', { posts, pageTitle: 'Home | Toprank', showOthers , showSidebar: true, showTopbar: true, activePage: "home", showEditNav: false, css});
  // console.log(posts);
}

async function addPost(req, res) {
  const categories = await categoryModel.getAllCategories();
  res.render('posts/addPost', {pageTitle: 'Create Post | Toprank', showOthers, categories , showSidebar: true, showTopbar: true, activePage: "addPost", showEditNav: false, css});
}

async function editPost(req, res) {
  const categories = await categoryModel.getAllCategories();
  res.render('posts/editPost',{pageTitle: 'Edit Post | Toprank', showOthers, categories , showSidebar: false, showTopbar: false, postId: req.query.postId, showEditNav: true, editTitle: "Edit Post",backId: "/home", css});
}

async function viewPost(req, res){
  let pageTitle = 'Post | Toprank';
  let showSidebar = false;
  let showTopbar = false;
  let showEditNav = false;
  
  res.render('pages/singlePage',{pageTitle , showSidebar, showTopbar, postId: req.query.postId, showEditNav, showOthers: true, css: "/assets/css/style2.css"});
}

async function announcementPost(req, res){
  let pageTitle = 'Main Page | Toprank';
  let showSidebar = false;
  let showTopbar = false;
  let showEditNav = false;
  const announcements = await postModel.getAnnouncementPost();
  res.render('pages/mainPage', {pageTitle, announcements , showSidebar, showTopbar, showEditNav, showOthers: true, css: "/assets/css/style2.css"});
}

async function filterPost(req,res){
  let pageTitle = 'Filter Page | Toprank';
  let showSidebar = false;
  let showTopbar = false;
  let showEditNav = false;
  res.render('posts/filter', {pageTitle , showSidebar, showTopbar, showEditNav, showOthers: true, css});
}

async function filter(req,res){
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;
  const category = req.query.category;
  const author = req.query.author;

  const dateParts = startDate.split('-');
  const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  const newStartDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const enddateParts = endDate.split('-');
  const enddate = new Date(enddateParts[0], enddateParts[1] - 1, enddateParts[2]);
  const newEndDate = enddate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  // console.log({newStartDate,newEndDate});
  const posts = await postModel.getFilteredPosts(category, author,newStartDate, newEndDate);
  res.render('index', { posts, pageTitle: 'Home | Toprank', showOthers , showSidebar: true, showTopbar: true, activePage: "home", showEditNav: false, css});
}

module.exports = {
  listPosts,
  addPost,
  editPost,
  viewPost,
  announcementPost,
  filterPost,
  filter,
};
