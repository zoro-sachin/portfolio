import React from 'react';
import { Link } from 'react-router-dom';
import LoadingScreen from '../components/common/LoadingScreen';
import profileImg from '../assets/images/anime_avatar.png';

const Home = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div className={`home-wrapper ${loading ? 'hidden' : 'visible'}`}>
        {/* Hero Section */}
        <section className="section hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title fade-in-up">
                AI Integrated <br />
                <span className="gradient-text">Fullstack Developer</span>
              </h1>
              <p className="hero-description fade-in-up" style={{ animationDelay: '0.2s' }}>
                Engineering sophisticated digital solutions with <br />
                unparalleled precision and modern elegance.
              </p>
              <div className="hero-actions fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Link to="/projects" className="btn btn-primary">Discover Work</Link>
                <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="section bento-section">
          <div className="container">
            <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>

              {/* Profile/About Card */}
              <div className="glass fade-in-up" style={{ gridColumn: 'span 2', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', animationDelay: '0.1s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--glass-border)' }}>
                    <img src={profileImg} alt="Sachin" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <span className="section-subtitle" style={{ margin: 0, textAlign: 'left', fontSize: '0.8rem' }}>Creative Developer</span>
                    <h2 style={{ fontSize: '2rem' }}>Sachin S.</h2>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '30px', maxWidth: '90%' }}>
                  B.Tech IT student at PTLEE CNCET. Specializing in the MERN stack and AI integration.
                  NSE Certified Data Analyst with a passion for building seamless user experiences.
                </p>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {['React', 'Node.js', 'Python', 'AI/ML'].map(tech => (
                    <span key={tech} className="tech-tag" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-silk)', border: '1px solid var(--glass-border)' }}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Projects Spotlight */}
              <div className="glass fade-in-up" style={{ gridColumn: 'span 1', gridRow: 'span 2', padding: '40px', animationDelay: '0.2s' }}>
                <span className="section-subtitle" style={{ textAlign: 'left', fontSize: '0.8rem', display: 'block' }}>Spotlight</span>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Featured Work</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { name: 'Aero Drone', tech: 'React & Node' },
                    { name: 'VLC Player', tech: 'Media API' },
                    { name: 'Logics Web', tech: 'Logic Puzzles' },
                    { name: 'TODO App', tech: 'React' }
                  ].map((project, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                      <div>
                        <h4 style={{ fontSize: '1rem', marginBottom: '2px' }}>{project.name}</h4>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.tech}</span>
                      </div>
                      <Link to="/projects" className="btn btn-secondary" style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}>→</Link>
                    </div>
                  ))}
                </div>
                <Link to="/projects" className="btn btn-primary" style={{ width: '100%', marginTop: '30px', fontSize: '0.8rem' }}>View All Projects</Link>
              </div>

              {/* Contact Card */}
              <div className="glass fade-in-up" style={{ gridColumn: 'span 2', padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', animationDelay: '0.3s' }}>
                <div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Let's Build Something</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Ready to transform your vision into reality?</p>
                </div>
                <Link to="/contact" className="btn btn-primary">Start A Project</Link>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;