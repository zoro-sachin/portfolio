<<<<<<< HEAD
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
=======
export const API_BASE_URL = process.env.REACT_APP_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : '/api');
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055

export const ROUTES = {
  HOME: '/',
  PROJECTS: '/projects',
  ABOUT: '/about',
  CONTACT: '/contact',
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};