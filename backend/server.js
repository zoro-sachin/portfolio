<<<<<<< HEAD
require('dotenv').config({ path: './.env' });  // MUST be first line
=======
const path = require('path');
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? null : path.resolve(__dirname, '.env')
});
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { rateLimit } = require('express-rate-limit');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');
const contactRoutes = require('./routes/contact');

const app = express();

<<<<<<< HEAD
// TEMP check: print URI
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);
=======
// Diagnostic logging
console.log("NODE_ENV:", process.env.NODE_ENV);
if (!process.env.MONGO_URI) {
  console.error("CRITICAL: MONGO_URI is not defined in environment variables!");
}
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055

// connect DB
connectDB(process.env.MONGO_URI);

// middleware
<<<<<<< HEAD
app.use(helmet());
=======
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for easier deployment debugging
}));
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
});
app.use(limiter);

<<<<<<< HEAD
=======
// Test route
app.get('/api/test', (req, res) => res.json({
  message: 'Backend is working!',
  mongoConnected: require('mongoose').connection.readyState === 1,
  env: process.env.NODE_ENV
}));

>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
// routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/contact', contactRoutes);

// health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5000;
<<<<<<< HEAD
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
=======

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

module.exports = app;
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
