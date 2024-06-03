require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/userModel');

const addAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONG_URI);
    console.log('MongoDB connected');

    const phone = '';
    const password = '';
    const school = 'N/A';
    const city = 'N/A';
    const grade = 'N/A';
    const name = 'Beksultan';

    const existingAdmin = await User.findOne({ phone });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    const user = await User.signup(phone, password, school, city, grade, name);
    user.isAdmin = true;
    await user.save();

    console.log('Admin user created successfully');
  } catch (err) {
    console.error('Error creating admin user:', err);
  } finally {
    mongoose.connection.close();
  }
};

addAdmin();
