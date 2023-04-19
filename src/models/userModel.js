const { firestore } = require('../firebase');

async function addUser(name, email) {
  const userRef = firestore.collection('users').doc();
  await userRef.set({ name, email });
  return userRef.id;
}

async function getAllUsers() {
  const snapshot = await firestore.collection('users').get();
  const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return users;
}

module.exports = {
  addUser,
  getAllUsers,
};
