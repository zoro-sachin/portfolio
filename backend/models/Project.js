const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  shortDescription: { type: String },
<<<<<<< HEAD
  tags: [String],
  liveUrl: { type: String },
  repoUrl: { type: String },
  coverImage: { type: String }, // store URL
=======
  technologies: [String],
  demoUrl: { type: String },
  githubUrl: { type: String },
  image: { type: String }, // store URL
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
  gallery: [String], // optional image URLs
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);
