const userModel = require('../models/userModel');

let css = "/assets/css/styles.css";
let showOthers = false;
async function listUsers(req, res) {
  const users = await userModel.getAllUsers();
  res.render('users', { users });
}

function newUser(req, res) {
  res.render('users/addUser',{pageTitle: 'Create User | Toprank', css,showOthers , showSidebar: true, showTopbar: true, showEditNav: false, activePage: "adduser"});
}

function editUser(req, res){
  res.render('users/editUser', {pageTitle: 'Edit User | Toprank', css,showOthers, showSidebar: false, showTopbar: false, userId: req.query.userId, showEditNav: true, activePage: "edituser", editTitle: "Edit User", backId: "/user/manage"})
}

async function manageUser(req, res) {
  const users = await userModel.getAllUsers();
  res.render('users/manageUser', {pageTitle: 'Manage User | Toprank', css,showOthers, users, showSidebar: true, showTopbar: true, userId: "", showEditNav: false, activePage: "manageuser"})
}

async function createUser(req, res) {
  const { name, email } = req.body;
  await userModel.addUser(name, email);
  res.redirect('/');
}

module.exports = {
  listUsers,
  newUser,
  createUser,
  editUser,
  manageUser,
};
