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
        <div className="container" style={{ maxWidth: '1200px' }}>
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle text-center">
            Here are some of the projects I've worked on. Each project represents
            a unique challenge and learning experience.
          </p>

          <div className="grid grid-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project._id || index}
                project={project}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>

          <div style={{ marginTop: '5rem' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>GitHub Repositories</h2>
            <p className="section-subtitle text-center">
              Explore my latest open-source contributions and projects directly from GitHub.
            </p>
            <GitHubProjects username="zoro-sachin" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;