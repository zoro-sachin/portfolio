import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/projects/ProjectCard';
import { projectsAPI } from '../services/api';
import GitHubProjects from '../components/projects/GitHubProjects';
import staticProjects from '../data/projectsData';

const Projects = () => {
  const [projects, setProjects] = useState(staticProjects); // Initialize with static projects

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await projectsAPI.getAll();
      // Combine API projects with static ones, avoiding duplicates if necessary
      // For simplicity, we just append them or replace if API is primary
      if (response.data && response.data.length > 0) {
        setProjects([...staticProjects, ...response.data]);
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
      // Keep static projects if API fails
      setProjects(staticProjects);
    }
  };

  return (
    <div className="projects-page">
      <section className="section">
        <div className="container">
          <span className="section-subtitle">Curation of work</span>
          <h1 className="section-title">Selected Projects</h1>
          <p className="section-subtitle" style={{ textTransform: 'none', marginTop: '-2rem' }}>
            A detailed look at the digital products and experimental interfaces I've crafted.
          </p>

          <div className="grid grid-3" style={{ marginTop: '4rem' }}>
            {projects.map((project, index) => (
              <ProjectCard
                key={project._id || index}
                project={project}
              />
            ))}
          </div>

          <div style={{ marginTop: '10rem' }}>
            <span className="section-subtitle">Open Source</span>
            <h2 className="section-title">GitHub Repositories</h2>
            <p className="section-subtitle" style={{ textTransform: 'none', marginTop: '-2rem' }}>
              Explore my latest contributions and ongoing technical experiments.
            </p>
            <GitHubProjects username="zoro-sachin" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;