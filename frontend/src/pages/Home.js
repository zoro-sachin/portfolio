import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

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
=======
import LoadingScreen from '../components/common/LoadingScreen';
import profileImg from '../assets/images/anime_avatar.png';

const Home = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div className={`home-container light-theme ${loading ? 'hidden' : 'visible'}`}>
        {/* Massive Hero Section */}
        <section className="hero-section">
          <div className="hero-content-main">
            <div className="hero-text-large">
              <h1 className="fade-in-up">  AI integrated Fullstack <br /> Developer</h1>
              <p className="subtitle fade-in-up delay-1">Creating amazing web applications with code & passion.</p>
              <div className="hero-cta fade-in-up delay-2">
                <Link to="/projects" className="pill-btn primary">View Projects</Link>
                <Link to="/contact" className="pill-btn outline">Contact Me</Link>
              </div>
            </div>
            <div className="profile-display fade-in-up delay-2">
              <img src={profileImg} alt="Profile" className="hero-profile-img" />
            </div>
          </div>
        </section>

        {/* Bento Grid Layout - Clean Light Theme */}
        <section className="bento-section">
          <div className="bento-grid">

            <div className="bento-card about-card">
              <div className="card-header">
                <span className="card-icon">👋</span>
                <span className="card-label">About Me</span>
              </div>
              <h2>I'm Sachin.s</h2>
              <p>B.Tech IT student at PTLEE CNCET. I truly love building web applications and exploring new technologies. I'm also an NSE certified Data Analyst.</p>
              <div className="tech-stack-mini">
                <span>React</span>
                <span>Node.js</span>
                <span>Python</span>
              </div>
            </div>

            <div className="bento-card projects-card">
              <div className="card-header">
                <span className="card-icon">🚀</span>
                <span className="card-label">Featured Work</span>
              </div>
              <div className="project-list-clean">
                <div className="project-item">
                  <div className="project-info">
                    <h3>TODO App</h3>
                    <span className="tech-tag">React</span>
                  </div>
                  <Link to="/projects" className="arrow-link">→</Link>
                </div>
                <div className="project-item">
                  <div className="project-info">
                    <h3>Portfolio</h3>
                    <span className="tech-tag">React</span>
                  </div>
                  <Link to="/projects" className="arrow-link">→</Link>
                </div>
              </div>
            </div>

            <div className="bento-card contact-card">
              <div className="card-header">
                <span className="card-icon">📬</span>
                <span className="card-label">Get in Touch</span>
              </div>
              <h3>Let's work together</h3>
              <Link to="/contact" className="pill-btn primary small">Contact</Link>
            </div>

          </div>
        </section>
      </div>
    </>
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
  );
};

export default Home;