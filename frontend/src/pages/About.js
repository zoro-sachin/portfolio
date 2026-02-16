import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { aboutAPI } from '../services/api';

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
    } catch (err) {
      console.error('Error fetching about data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="section">
        <div className="container">
          <LoadingSpinner size="large" />
        </div>
      </div>
    );
  }

  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h1 className="section-title">About Me</h1>
              <div className="about-description">
                {about?.content || (
                  <>
                    <p>
                      I'm a passionate full-stack developer with expertise in modern web technologies. 
                      I love creating efficient, scalable, and user-friendly applications.
                    </p>
                    <p>
                      With experience in both frontend and backend development, I bring ideas to life 
                      through clean code and thoughtful design.
                    </p>
                  </>
                )}
              </div>

              <div className="skills-section">
                <h3>Technologies & Skills</h3>
                <div className="skills-grid">
                  <div className="skill-category">
                    <h4>Frontend</h4>
                    <div className="skills-list">
                      <span>React.js</span>
                      <span>JavaScript</span>
                      <span>HTML5/CSS3</span>
                      <span>Tailwind CSS</span>
                    </div>
                  </div>
                  
                  <div className="skill-category">
                    <h4>Backend</h4>
                    <div className="skills-list">
                      <span>Node.js</span>
                      <span>Express.js</span>
                      <span>MongoDB</span>
                      <span>REST APIs</span>
                    </div>
                  </div>
                  
                  <div className="skill-category">
                    <h4>Tools</h4>
                    <div className="skills-list">
                      <span>Git</span>
                      <span>Docker</span>
                      <span>AWS</span>
                      <span>VS Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <div className="image-placeholder glass">
                <span>Your Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;