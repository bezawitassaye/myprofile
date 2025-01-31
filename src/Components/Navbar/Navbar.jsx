import React from 'react';
import assets from '../../assets/assets';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" />
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        
        <li><a href="#skills">Skills</a></li>
      </ul>
      <div className="nav-connect">
        Connect With Me
      </div>
    </div>
  );
};

export default Navbar;
