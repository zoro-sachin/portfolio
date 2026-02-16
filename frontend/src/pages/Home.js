import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in-up">
              Hi, I'm a <span className="gradient-text">Sachin.s</span>
            </h1>
            <p className="hero-description fade-in-up">
              I am a student ,studying in B.Tech IT in PTLEE CNCET . I love building web applications and learning new technologies.
              And also i am a NSE certified Data Analyst.
            </p>
            <div className="hero-actions fade-in-up">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="featured section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-3">
            {/* These would be populated from API */}
            <div className="project-preview glass">
              <h3>Project One</h3>
              <p>Modern web application built with React and Node.js</p>
            </div>
            <div className="project-preview glass">
              <h3>Project Two</h3>
              <p>E-commerce platform with payment integration</p>
            </div>
            <div className="project-preview glass">
              <h3>Project Three</h3>
              <p>Real-time chat application</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;