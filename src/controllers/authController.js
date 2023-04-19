function signIn(req, res) {
    res.render('sign_in', {pageTitle: "Sign In | Toprank", showSidebar: false, showTopbar: false, showEditNav: false});
}



// src/controllers/authController.js
function signUp(req, res) {
    res.render('sign_up');
  }
  
  module.exports = {
    signIn,
    signUp
  };
