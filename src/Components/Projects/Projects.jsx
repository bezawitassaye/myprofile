import React, { useState } from 'react';
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const projects = [
  { id: 'all', title: 'All ' },
  { id: 'uiux', title: 'UI/UX ', description: 'Modern and user-friendly designs for web and mobile applications.' },
  { id: 'mobile', title: 'Mobile ', description: 'Cross-platform mobile apps with a focus on performance and usability.' },
  { id: 'web', title: 'Web ', description: 'Responsive websites with clean and scalable code.' },
];

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState('all');

  const selectedProjectDetails = selectedProjectId === 'all' 
    ? projects.filter((p) => p.id !== 'all') 
    : projects.filter((p) => p.id === selectedProjectId);

  return (
    <div className="app-container">
      <div className="contact-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${selectedProjectId === project.id ? 'active' : ''}`}
            onClick={() => setSelectedProjectId(project.id)}
          >
            <h2>{project.title}</h2>
          </div>
        ))}
      </div>
      <div className="projects-details-container">
        {selectedProjectDetails.map((project) => (
          <div key={project.id} className="project-details-card">
            <h2>{project.title}</h2>
            {project.description && <p>{project.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;