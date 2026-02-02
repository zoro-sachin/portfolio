# Portfolio Project

A full-stack portfolio application with a React frontend and Express/MongoDB backend.

## Structure

- `frontend/`: React application.
- `backend/`: Express server and MongoDB models.

## Local Development

1. **Backend**:
   ```bash
   cd backend
   npm install
   # Create .env based on .env.example
   npm start
   ```

2. **Frontend**:
   ```bash
   cd frontend
   npm install
   # Create .env based on .env.example
   npm start
   ```

## Deployment on Vercel

This project is configured for Vercel monorepo deployment.

1.  Connect your repository to Vercel.
2.  The `vercel.json` in the root will automatically handle routing.
3.  Add the following Environment Variables in the Vercel Dashboard:
    - `MONGO_URI`: Your MongoDB connection string.
    - `JWT_SECRET`: A secure string for JWT tokens.
    - `ADMIN_EMAIL`: Your admin email.
    - `ADMIN_PASSWORD`: Your admin password.
4.  Vercel will build the frontend and deploy the backend as Serverless Functions.

## Features

- Dynamic project display (fetched from MongoDB).
- Admin dashboard for project management.
- Contact form integration.
- Responsive design.
