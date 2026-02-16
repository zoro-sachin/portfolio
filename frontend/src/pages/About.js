import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import LoadingSpinner from '../components/common/LoadingSpinner';
import { aboutAPI } from '../services/api';
=======
import '../styles/About.css';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { aboutAPI } from '../services/api';
import profileImg from '../assets/images/anime_avatar.png';
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055

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
<<<<<<< HEAD
    } catch (err) {
      console.error('Error fetching about data:', err);
=======
    } catch (error) {
      console.error('Error fetching about data:', error);
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="section">
<<<<<<< HEAD
        <div className="container">
          <LoadingSpinner size="large" />
        </div>
=======
        <LoadingSpinner size="large" />
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
      </div>
    );
  }

  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <div className="about-content">
<<<<<<< HEAD
            <div className="about-text">
              <h1 className="section-title">About Me</h1>
=======

            {/* LEFT CONTENT */}
            <div className="about-text">
              <h1 className="section-title">About Me</h1>

>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
              <div className="about-description">
                {about?.content || (
                  <>
                    <p>
<<<<<<< HEAD
                      I'm a passionate full-stack developer with expertise in modern web technologies. 
                      I love creating efficient, scalable, and user-friendly applications.
                    </p>
                    <p>
                      With experience in both frontend and backend development, I bring ideas to life 
                      through clean code and thoughtful design.
=======
                      I'm a passionate full-stack developer with expertise in
                      modern web technologies.
                    </p>
                    <p>
                      I love building clean, scalable, and user-friendly
                      applications with AI integration.
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
                    </p>
                  </>
                )}
              </div>

              <div className="skills-section">
                <h3>Technologies & Skills</h3>
<<<<<<< HEAD
=======

>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
                <div className="skills-grid">
                  <div className="skill-category">
                    <h4>Frontend</h4>
                    <div className="skills-list">
<<<<<<< HEAD
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
=======
                      <span className="pill-btn">React.js</span>
                      <span className="pill-btn">JavaScript</span>
                      <span className="pill-btn">HTML / CSS</span>
                      <span className="pill-btn">Tailwind</span>
                    </div>
                  </div>

                  <div className="skill-category">
                    <h4>Backend</h4>
                    <div className="skills-list">
                      <span className="pill-btn">Node.js</span>
                      <span className="pill-btn">Express</span>
                      <span className="pill-btn">MongoDB</span>
                    </div>
                  </div>

                  <div className="skill-category">
                    <h4>Tools</h4>
                    <div className="skills-list">
                      <span className="pill-btn">Git</span>
                      <span className="pill-btn">VS Code</span>
                      <span className="pill-btn">ChatGPT</span>
                      <span className="pill-btn">Canva</span>
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
                    </div>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            
            <div className="about-image">
              <div className="image-placeholder glass">
                <span>Your Photo</span>
              </div>
            </div>
=======

            {/* RIGHT IMAGE */}
            <div className="about-image">
              <div className="avatar-wrapper">
                <img src={profileImg} alt="Profile Avatar" />
                <span className="code-icon">&lt;/&gt;</span>
              </div>
            </div>

>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
          </div>
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
