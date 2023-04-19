const { firestore } = require('../firebase');

async function getAllCategories() {
  const snapshot = await firestore.collection('categories').get();
  const categories = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return categories;
}

module.exports = {
    getAllCategories,
};