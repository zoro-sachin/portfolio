import React from 'react';

const ProjectCard = ({ project, onEdit, onDelete, isAdmin = false }) => {
  return (
    <div className="project-card glass fade-in-up">
      <div className="project-image">
        {project.image && (
          <img src={project.image} alt={project.title} />
        )}
      </div>
<<<<<<< HEAD
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
=======

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
        <div className="project-tech">
          {project.technologies?.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
<<<<<<< HEAD
        
        <div className="project-links">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
=======

        <div className="project-links">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="pill-btn primary small">
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
              Live Demo
            </a>
          )}
          {project.githubUrl && (
<<<<<<< HEAD
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
=======
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="pill-btn outline small">
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
              GitHub
            </a>
          )}
        </div>

        {isAdmin && (
          <div className="project-actions">
<<<<<<< HEAD
            <button onClick={() => onEdit(project)} className="btn btn-secondary">
              Edit
            </button>
            <button onClick={() => onDelete(project._id)} className="btn btn-danger">
=======
            <button onClick={() => onEdit(project)} className="pill-btn outline small">
              Edit
            </button>
            <button onClick={() => onDelete(project._id)} className="pill-btn primary small" style={{ background: '#dc3545', borderColor: '#dc3545' }}>
>>>>>>> d4055dd1edbfdfba00ebf8c80b6022c7e82c0055
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;