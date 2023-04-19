// src/models/postModel.js
const { firestore } = require('../firebase');

async function getAllPosts() {
  const snapshot = await firestore.collection('posts').orderBy('created_at', 'desc').get();
  const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return posts;
}

async function createPost(title, content) {
  const postRef = firestore.collection('posts').doc();
  const createdAt = new Date();
  await postRef.set({
    title,
    content,
    created_at: createdAt,
  });
  return postRef.id;
}

module.exports = {
  getAllPosts,
  createPost,
};
