const categoryModel = require('../models/categoryModel');

let css = "/assets/css/styles.css";
let showOthers = false;
function newCategory(req, res) {
    res.render('categories/addCategory',{pageTitle: 'Create Category | Toprank', css,showOthers , showSidebar: true, showTopbar: true, showEditNav: false, activePage: "addcategory"});
}

function editCategory(req, res) {
    res.render('categories/editCategory',{pageTitle: 'Edit Category | Toprank', css,showOthers ,categoryId: req.query.categoryId, showSidebar: false, showTopbar: false, showEditNav: true, activePage: "", editTitle: "Edit Category", backId: "/category/manage"});
}

async function manageCategory(req, res) {
    const categories = await categoryModel.getAllCategories();
    res.render('categories/manageCategory',{categories, pageTitle: 'Manage Category | Toprank', css,showOthers , showSidebar: true, showTopbar: true, showEditNav: false, activePage: "managecategory"});
}

  module.exports = {
    newCategory,
    manageCategory,
    editCategory,
  };