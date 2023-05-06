// public/firebaseClient.js
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbZjfV27UzI4bhJ3U0gphkCxMo-zgdPe4",
  authDomain: "toprank-e76b7.firebaseapp.com",
  projectId: "toprank-e76b7",
  storageBucket: "toprank-e76b7.appspot.com",
  messagingSenderId: "463434478116",
  appId: "1:463434478116:web:dd7a2c7f2d6b3a52ea5eb1",
  measurementId: "G-HKGTQ94H00"
};

function checkAuthState(redirectIfSignedIn, redirectIfSignedOut) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (redirectIfSignedIn) {
        window.location.href = redirectIfSignedIn;
      }
    } else {
      if (redirectIfSignedOut) {
        window.location.href = redirectIfSignedOut;
      }
    }
  });
}


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
  
const auth = firebase.auth();
