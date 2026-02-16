const mongoose = require('mongoose');

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
  }
};

module.exports = connectDB;
