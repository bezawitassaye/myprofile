import React from 'react';
import './About.css';
import assets from '../../assets/assets';

const About = () => {
  return (
    <>
    <div>
    <h2>About Me</h2>

    </div>
    <div className="about-section">
        <div className="about-image">
        <img src={assets.fliped} alt="About Me" />
      </div>
       
        
      <div className="about-text">
      
        <p>
          I am a passionate developer with experience in full-stack development, UI/UX design, and automated QA testing. 
          I create innovative and user-friendly solutions for both web and mobile platforms.
       
          My expertise spans multiple technologies including React, Node.js, and Python. I am also experienced in testing 
          frameworks such as Selenium and Cypress to ensure high-quality applications.
       
          I love working in collaborative environments and enjoy solving complex problems with simple, elegant solutions. 
          My goal is to provide value through technology by creating efficient, scalable, and user-friendly products.
        
        
        </p>
      </div>
      
    </div>
    </>
  );
};

export default About;
