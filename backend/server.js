require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const topicRoutes = require('./routes/topic');
const userRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

// app
const app = express();

// middlewares
app.use(express.json());

// routes
app.use('/api/topics', topicRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

// connect to db
mongoose.connect(process.env.MONG_URI)
  .then(() => {
    // listening
    app.listen(process.env.PORT, () => {
      console.log('connected to db and listening on port', process.env.PORT);
    });
  })
  .catch( err => {console.log(err)});
