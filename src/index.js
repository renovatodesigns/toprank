// src/index.js
const authRoutes = require('./routes/authRoutes');
const express = require('express');
const bodyParser = require('body-parser');
const layouts = require('express-ejs-layouts');
const postRoutes = require('./routes/postRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
const {admin} = require('./firebase');
const categoryRoutes = require('./routes/categoryRoutes');


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(layouts);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use(bodyParser.json());



app.use('/login', authRoutes);
app.use('/home', postRoutes);
app.use('/user', userRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/category', categoryRoutes);

app.post('/updateUser', async (req, res) => {
  const { userId, newEmail, newUsername, newRole, newImageUrl, newFirstName, newLastName } = req.body;
  const data = { userId, newEmail, newUsername, newRole, newImageUrl, newFirstName, newLastName };
  try {

    // Update the user's details in the Firebase database
    const db = admin.firestore();
    const userRef = db.collection('users').doc(userId);
    await userRef.update({
      email: newEmail,
      username: newUsername,
      role: newRole,
      imageUrl: newImageUrl,
      firstName: newFirstName,
      lastName: newLastName,
    });

     // Update the user's email in Firebase Authentication
     await admin.auth().updateUser(userId, {
      email: newEmail,
    });

    res.status(200).send('User details and email updated successfully');
  } catch (error) {
    console.error('Error updating user details and email:', error);
    res.status(500).send('Error updating user details and email');
  }
});

app.delete('/deleteUser', async (req, res) => {
  const { userId } = req.body;

  try {
    

    // Delete user document from Firestore
    const userRef = admin.firestore().collection('users').doc(userId);

    await userRef.delete();

    // Delete user from Firebase Authentication
    await admin.auth().deleteUser(userId);

    res.status(200).json({ message: 'User successfully deleted' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
});



app.listen(port, () => {
  console.log("==========================================");
  console.log(`||App listening at http://localhost:${port}||`);
  console.log("==========================================");
});
