import React, { useState } from 'react';
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import frame1 from "../../assets/Frame 22.jpg";
import frame3 from "../../assets/Group 5.png";
import frame2 from "../../assets/Group 6.png";
import frame5 from "../../assets/Group 7.png";
import frame4 from "../../assets/Group 4(1).png";
import frame6 from "../../assets/Group 8.png";
import frame7 from "../../assets/Screenshot from 2025-01-27 14-28-57.png";

// Separate array for buttons
const projectCategories = [
  { id: 'all', title: 'All' },
  { id: 'uiux', title: 'UI/UX' },
  { id: 'mobile', title: 'Mobile' },
  { id: 'web', title: 'Web' },
];

// Separate array for projects
const projectDetails = [
  { id: 'web', title: 'Mobile', description: 'Cross-platform mobile apps with a focus on performance and usability.', image: frame4 },
  { id: 'uiux', title: 'UI/UX', description: 'Creative and interactive UI/UX designs.', image: frame6 },
  { id: 'uiux', title: 'UI/UX', description: 'Clean and intuitive user experiences.', image: frame7 },
  { id: 'web', title: 'Web', description: 'Responsive websites with scalable code.', image: frame1 },
  { id: 'web', title: 'Web', description: 'Modern web applications with optimized performance.', image: frame2 },
  { id: 'web', title: 'Web', description: 'Fast and secure web solutions.', image: frame3 },
  { id: 'web', title: 'Web', description: 'Professional and clean website designs.', image: frame5 },
];

const Projects = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');

  const filteredProjects =
    selectedCategoryId === 'all'
      ? projectDetails
      : projectDetails.filter((project) => project.id === selectedCategoryId);

  return (
    <div className="app-container">
      <div id='portfolio' className="contact-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      {/* Buttons */}
      <div className="projects-container">
        {projectCategories.map((category) => (
          <div
            key={category.id}
            className={`project-card ${selectedCategoryId === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategoryId(category.id)}
          >
            <h2>{category.title}</h2>
          </div>
        ))}
      </div>
      {/* Displayed Projects */}
      <div className="projects-details-container">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-details-card">
            <img src={project.image} alt={project.title} />
            <div className="project-description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
