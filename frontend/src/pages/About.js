import React, { useState, useEffect } from 'react';
import { aboutAPI } from '../services/api';
import profileImg from '../assets/images/anime_avatar.png';

const About = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
      const response = await aboutAPI.get();
      setAbout(response.data);
    } catch (error) {
      console.error('Error fetching about data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <div className="split-content">
            {/* LEFT CONTENT */}
            <div className="about-text fade-in-up">
              <span className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>The Person Behind The Code</span>
              <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>Passionate <br /> Problem Solver</h1>

              <div className="about-description" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8' }}>
                {about?.content ? (
                  <p>{about.content}</p>
                ) : (
                  <>
                    <p style={{ marginBottom: '20px' }}>
                      I am a specialized full-stack developer based in Arcot, Tamil Nadu,
                      dedicated to crafting seamless digital experiences that bridge
                      the gap between complex logic and human-centered design.
                    </p>
                    <p>
                      With an academic foundation in Information Technology and
                      a professional certification as a Data Analyst, I integrate
                      analytical depth with creative frontend engineering.
                    </p>
                  </>
                )}
              </div>

              <div style={{ marginTop: '50px' }}>
                <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '20px' }}>Technical Artillery</h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '40px' }}>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '15px' }}>Core Tech</h4>
                    <div className="tech-list" style={{ marginTop: 0 }}>
                      {['React', 'Node.js', 'Python', 'MongoDB'].map(s => <span key={s} className="tech-tag">{s}</span>)}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '15px' }}>Analytical Tools</h4>
                    <div className="tech-list" style={{ marginTop: 0 }}>
                      {['SQL', 'Excel', 'VBA', 'Tableau'].map(s => <span key={s} className="tech-tag">{s}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="about-image fade-in-up" style={{ animationDelay: '0.2s', position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: '40px',
                overflow: 'hidden',
                border: '1px solid var(--glass-border)',
                aspectRatio: '4/5',
                background: 'var(--glass-bg)'
              }}>
                <img src={profileImg} alt="Sachin S." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  bottom: '30px',
                  right: '30px',
                  background: 'var(--text-silk)',
                  color: 'var(--bg-onyx)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: '700'
                }}>
                  S.
                </div>
              </div>
              {/* Decorative Glow */}
              <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-20%',
                width: '100%',
                height: '100%',
                background: 'var(--glow-gradient)',
                zIndex: -1,
                opacity: 0.5
              }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
