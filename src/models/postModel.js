// src/models/postModel.js
const { firestore, timestamp } = require('../firebase');

async function getAllPosts() {
  let query = firestore.collection('posts');
  const snapshot = await query.orderBy('created_at', 'desc').get();
  const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return posts;
}

async function getAnnouncementPost(){
  const postAnnouncement = await firestore.collection('posts').where('purpose', "==", 'announcement').get();
  if (!postAnnouncement.empty) {
    const postData = postAnnouncement.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return postData;
  } else {
    console.log("No matching documents found.");
  }
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

async function getFilteredPosts(category, author, newStartDate, newEndDate) {
  let query = firestore.collection('posts');
  let snapshot, finalquery;

  const startDate = new Date(newStartDate);
  const endDate = new Date(newEndDate);

  if (category) {
    finalquery = query.where('category', '==', category);
  }

  if (author) {
    finalquery = finalquery.where('author', '==', author);
  }

  if(startDate && endDate){
    const startTimestamp = timestamp.fromDate(startDate);
    const endTimestamp = timestamp.fromDate(endDate);
    finalquery = finalquery.where('created_at', '>=', startTimestamp).where('created_at', '<=', endTimestamp);
  }

    snapshot = await finalquery.get();
    const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return posts;
}

module.exports = {
  getAllPosts,
  createPost,
  getAnnouncementPost,
  getFilteredPosts,
};
