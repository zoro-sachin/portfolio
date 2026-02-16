const mongoose = require('mongoose');

<<<<<<< HEAD
const connectDB = async (mongoUri) => {
  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
=======
let isConnected = false;

const connectDB = async (mongoUri) => {
  if (isConnected) {
    console.log('Using existing MongoDB connection');
    return;
  }

  if (!mongoUri) {
    console.error('MONGO_URI is missing. Cannot connect to database.');
    return;
  }

  try {
    const db = await mongoose.connect(mongoUri);
    isConnected = db.connections[0].readyState === 1;
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    if (process.env.NODE_ENV !== 'production') {
      process.exit(1);
    }
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
  }
};

module.exports = connectDB;
