import React, { useEffect } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import services_data from '../../assets/services_data';
import VanillaTilt from 'vanilla-tilt'; // Import Tilt.js

const Services = () => {
    useEffect(() => {
        // Initialize Tilt.js for all cards when the component mounts
        const tiltElements = document.querySelectorAll('.tilt-card');
        tiltElements.forEach((element) => {
            // Use the Tilt.js library to add 3D effect on hover
            VanillaTilt.init(element, {
                max: 15,  // Max tilt angle
                speed: 300,  // Speed of tilt transition
                glare: true,  // Enable glare effect
                'max-glare': 0.5,  // Max glare intensity
            });
        });

        // Cleanup tilt.js when component unmounts
        return () => {
            tiltElements.forEach((element) => {
                element.vanillaTilt.destroy();
            });
        };
    }, []);

    return (
        <div className="services">
            <div id='services' className="contact-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>

            <div className="card-container">
                {services_data.map((service, index) => (
                    <div className="tilt-card" key={index}>
                        <div className="card">
                            <div className="card-image">
                                <img src={service.s_image} alt="" />
                            </div>
                            <div className="card-text">
                                <h2>{service.s_name}</h2>
                                <p>{service.s_desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
