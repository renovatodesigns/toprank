// src/firebase.js
const admin = require('firebase-admin');
const serviceAccount = require('./toprank-e76b7-firebase-adminsdk-wjgvu-bfe10ca5b7.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();

module.exports = {
  firestore,
  admin,
};
