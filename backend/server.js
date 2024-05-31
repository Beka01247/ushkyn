require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const topicRoutes = require('./routes/topic');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const cors = require('cors')

// app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

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
  .catch( error => {console.log(error)});
