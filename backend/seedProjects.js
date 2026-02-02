const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config({ path: './.env' });

const projects = [
    {
        title: 'Logical Thinking Learning Platform',
        shortDescription: 'A full-stack MERN application for improving logical reasoning.',
        description: 'A comprehensive full-stack MERN application designed to help students improve their logical reasoning and problem-solving skills through interactive practice, quizzes, and AI-powered learning features like automated hint generation.',
        technologies: ['MERN', 'MongoDB', 'React', 'Node.js', 'OpenAI', 'JWT'],
        githubUrl: 'https://github.com/zoro-sachin/logics-web',
        demoUrl: '',
        image: '/images/logics-web.png',
        featured: true
    },
    {
        title: 'Aero Design Web App',
        shortDescription: 'Modern landing page and admin dashboard for an Aero concept.',
        description: 'A responsive landing page for an Aero Design concept with a modern UI, featuring dark/light mode, a contact form connected to MongoDB, and a JWT-protected Admin Dashboard for managing submissions.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'UI/UX'],
        githubUrl: 'https://github.com/zoro-sachin/aero-drone',
        demoUrl: '',
        image: '/images/aero-drone.png',
        featured: true
    },
    {
        title: 'Todo Application',
        shortDescription: 'A sleek and efficient task management application.',
        description: 'A modern todo application built to streamline task management. Features include category filtering, progress tracking, and interactive UI elements for a productive experience.',
        technologies: ['JavaScript', 'React', 'CSS'],
        githubUrl: 'https://github.com/zoro-sachin/todo',
        demoUrl: '',
        image: '',
        featured: false
    },
    {
        title: 'Video Player',
        shortDescription: 'A custom web-based video player.',
        description: 'A custom video player implementation focused on smooth performance and clean user interface, providing essential playback controls and support for various formats.',
        technologies: ['JavaScript', 'HTML5', 'CSS3'],
        githubUrl: 'https://github.com/zoro-sachin/videoplayer',
        demoUrl: '',
        image: '',
        featured: false
    },
    {
        title: 'Developer Portfolio',
        shortDescription: 'A modern, full-stack developer portfolio.',
        description: 'A premium developer portfolio website featuring a MERN stack backend, glassmorphism UI, and dynamic project management. It includes an admin dashboard for content updates and a responsive design for all devices.',
        technologies: ['MERN', 'React', 'Node.js', 'MongoDB', 'Glassmorphism'],
        githubUrl: 'https://github.com/zoro-sachin/portfolio',
        demoUrl: '',
        image: '',
        featured: true
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB for seeding...');

        await Project.deleteMany({});
        console.log('Cleared existing projects.');

        await Project.insertMany(projects);
        console.log('Successfully seeded projects!');

        process.exit();
    } catch (err) {
        console.error('Error seeding database:', err);
        process.exit(1);
    }
};

seedDB();
