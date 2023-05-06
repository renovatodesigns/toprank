// src/controllers/authController.js

let css = "/assets/css/styles.css";
function signIn(req, res) {
  const pageTitle = "Sign In | Toprank";
  let showSidebar = false;
  let showTopbar = false;
  let showEditNav = false;
  let showOthers = false;

    res.render('auth/sign_in', {pageTitle, showSidebar, showTopbar, showEditNav, css, showOthers});
}

module.exports = {
  signIn
};
