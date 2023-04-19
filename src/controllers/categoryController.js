const categoryModel = require('../models/categoryModel');

function newCategory(req, res) {
    res.render('addCategory',{pageTitle: 'Create Category | Toprank' , showSidebar: true, showTopbar: true, showEditNav: false, activePage: "addcategory"});
}

function editCategory(req, res) {
    res.render('editCategory',{pageTitle: 'Edit Category | Toprank' ,categoryId: req.query.categoryId, showSidebar: false, showTopbar: false, showEditNav: true, activePage: "", editTitle: "Edit Category", backId: "/category/manage"});
}

async function manageCategory(req, res) {
    const categories = await categoryModel.getAllCategories();
    res.render('manageCategory',{categories, pageTitle: 'Manage Category | Toprank' , showSidebar: true, showTopbar: true, showEditNav: false, activePage: "managecategory"});
}

  module.exports = {
    newCategory,
    manageCategory,
    editCategory,
  };