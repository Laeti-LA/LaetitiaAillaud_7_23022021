// Import 
// require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const path = require('path');
// const helmet = require('helmet');
// const xss = require('xss-clean');
// const cookieSession = require('cookie-session');

// Import des routes 
// const userRoutes = require('./routes/user');
// const postRoutes = require('./routes/post');
// const commentRoutes = require('./routes/comment');
// const reactionRoutes = require('./routes/reaction');


const app = express();

// Headers models
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

/* app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
*/ 

// app.use(cors());
/* app.use(
  cookieSession({
    name: "session",
    secret: "s3CR3TsTRinG",
    cookie: {
      secure: true,
      httpOnly: true,
      domain: "http://localhost:3000/",
    },
  })
); */

// app.use(helmet());
// app.use(xss());

// app.use('/images', express.static(path.join(__dirname, 'images')));
// app.use('/files', express.static(path.join(__dirname, 'files')));

// Import des logiques de routing 
// app.use('/api/auth', userRoutes);
// app.use('/api/posts', postRoutes);


module.exports = app;