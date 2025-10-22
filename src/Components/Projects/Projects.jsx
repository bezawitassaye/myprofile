import React, { useState } from 'react';
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import gocart from "../../assets/gocart.png";
import Travel from "../../assets/travel_app.png";
import Portfolio from "../../assets/portfolio.png";
import Movie from "../../assets/movie.png";
import food from "../../assets/food_web.png";
import cloths from "../../assets/clotts.png";
import food_uiux from "../../assets/food_uiux.jpeg";
import realstate from "../../assets/realstate app.png";
import jym from "../../assets/jym.jpeg";
import movieapp from "../../assets/movieapp.png";
import doctors from "../../assets/doctors.png";
import blog from "../../assets/blog.webp";


const projectCategories = [
  { id: 'all', title: 'All' },
  { id: 'uiux', title: 'UI/UX' },
  { id: 'mobile', title: 'Mobile' },
  { id: 'web', title: 'Web' },
];
const projectDetails = [
  {

    id: 'web',
    title: 'Movie Booking App',
    description: 'A full-featured movie booking platform that allows users to browse movies, view showtimes, select seats, and make secure online payments. The system includes user authentication, admin movie management, and responsive design for a smooth experience on both web and mobile devices',
    image: Movie,
    tags: ['Next.js', 'Express.js', 'MongoDB', 'Node.js'],
    viewLink: 'https://booking-movies-jade.vercel.app/movies',
    codeLink: 'https://github.com/bezawitassaye/movie_booking',
  }, {
    id: 'mobile',
    title: 'Real Estate Mobile Application',
    description:
      'A full-stack Real Estate application with React Native, featuring Google authentication, dynamic property listings, and user profiles. Designed with modern tools like Expo SDK 52, Appwrite, Tailwind CSS, and TypeScript for a seamless and scalable experience.',
    image: realstate,
    tags: ['React Native', 'Expo', 'Tailwind CSS', 'Appwrite', 'TypeScript', 'Redux Toolkit'],

    codeLink: 'https://github.com/bezawitassaye/real-stateapp',
  },


  {
    id: 'uiux',
    title: ' Modern Food Ordering App UI/UX Design ',
    description: 'I designed a modern food ordering app with a clean, engaging UI/UX. The app includes onboarding, login options, menu browsing, cart management, checkout, and multiple payment methods. Built with high-fidelity, responsive screens and smooth user flow, it ensures a seamless ordering experience. ',
    image: food_uiux,
    tags: ['Figma', 'User Interface', 'User Experience', 'Mobile Design'],
    viewLink: 'https://www.figma.com/design/br76NUJwMhygf7YCX4qnIM/Food-ordering-app?t=2dT8wTcVrNKOvctk-0',

  },


  {
    id: 'web',
    title: 'Full Stack AI Multi-Vendor E-Commerce App',
    description:
      'A multi-vendor e-commerce platform featuring responsive customer storefronts, dedicated vendor dashboards for product and sales management, and a comprehensive admin panel to oversee vendors, products, and commissions',
    image: gocart,
    tags: ['Next Js', 'Node.js', 'Tailwind CSS', 'Express.js', 'ImageKit', 'Lucide React', 'Redux Toolkit'],
    viewLink: 'https://eccomerce-onr6.onrender.com/',
    codeLink: 'https://github.com/bezawitassaye/eccomerce',
  },
  {
    id: 'uiux',
    title: ' Modern Gym & Fitness App UI/UX Design  ',
    description: 'I designed a gym and fitness mobile app with a clean and motivating UI/UX. The app includes workout plans, exercise tracking, progress monitoring, diet plans, membership management, and booking sessions. Built with high-fidelity, responsive screens and smooth navigation, it ensures users stay engaged and on track with their fitness goals. Designed in Figma, focusing on usability and modern aesthetics.. ',
    image: jym,
    tags: ['Figma', 'User Interface', 'User Experience', 'Mobile Design'],
    viewLink: 'https://www.figma.com/design/flWlrneNmxCjkw1TXPo82U/Design-Sport-app?t=2dT8wTcVrNKOvctk-0',

  },

  {
    id: 'uiux',
    title: ' Modern Doctors Appointment App UI/UX Design  ',
    description: 'I designed a doctors appointment mobile app with a clean and motivating UI/UX. The app includes doctor profiles, appointment scheduling, patient management, and telemedicine features. Built with high-fidelity, responsive screens and smooth navigation, it ensures users stay engaged and on track with their health goals. Designed in Figma, focusing on usability and modern aesthetics.. ',
    image: doctors,
    tags: ['Figma', 'User Interface', 'User Experience', 'Mobile Design'],
    viewLink: 'https://www.figma.com/design/9JZP5kvS97lBsWXZiicipU/Doctors?node-id=64-609&t=2dT8wTcVrNKOvctk-0',

  },


{
    id: 'mobile',
    title: 'blog-app-clean-architecture',
    description: 'A modern blog application built with Flutter, following clean architecture principles for scalable and maintainable code. The app allows users to create, read, update, and delete blog posts, with a focus on separation of concerns, testability, and efficient state management. Its intuitive interface, smooth navigation, and responsive design provide an excellent user experience while demonstrating best practices in Flutter development and software architecture.',
    image: blog,
    tags: ['Flutter', 'Supabase', 'Hive', 'Bloc', 'GetIt', 'Cubit'],

    codeLink: 'https://github.com/bezawitassaye/spotify_flutter',
  },

  {
    id: 'mobile',
    title: 'A Movie Finding App with Extensive Search',
    description: 'Built with Expo, TypeScript, and Tailwind CSS, this app fetches movies and creates a popularity algorithm using Appwrite. It provides users with a seamless browsing experience, ranking movies based on various engagement metrics. The app leverages modern UI/UX principles for a responsive and visually appealing interface, ensuring real-world scalability and performance.',
    image: movieapp,
    tags: ['React Native', 'Expo', 'Tailwind CSS', 'Appwrite', 'TypeScript', 'Redux Toolkit'],

    codeLink: 'https://github.com/bezawitassaye/movie-app',
  },
  {
    id: 'web',
    title: 'Travel App',
    description: 'A user-friendly travel app designed to simplify trip planning and enhance the travel experience. Users can discover destinations, book flights and hotels, explore attractions, and access personalized itineraries.',
    image: Travel,
    tags: ['Next js', 'Tailwind css', 'Context-API'],
    viewLink: 'https://travel-app-pied-three.vercel.app/',
    codeLink: 'https://github.com/bezawitassaye/travel-app',
  },
  {
    id: 'web',
    title: 'Personal Portfolio Website',
    description: 'A professional portfolio showcasing the skills, projects, and experience of Bezawit Assaye, a Mid-Senior Frontend Developer. The portfolio highlights expertise in React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, and UI/UX design',
    image: Portfolio,
    tags: ['Next Js', 'Node.js', 'Tailwind CSS', 'Express.js', 'Redux Toolkit'],
    viewLink: 'https://myprofile-ek46.onrender.com/',
    codeLink: 'https://github.com/bezawitassaye/myprofile',
  },

  {
    id: 'web',
    title: 'Delivery Service Website',
    description: 'A reliable and efficient delivery app designed to connect users with local restaurants, stores, and couriers. Users can place orders, track deliveries in real-time, and receive notifications for updates. The app features secure payments, estimated delivery times, and an intuitive interface for a smooth ordering experience. It aims to make ordering and receiving goods fast, convenient, and hassle-free.',
    image: food,
    tags: ['Next Js', 'Node.js', 'Tailwind CSS', 'Express.js', 'Redux Toolkit'],
    viewLink: 'https://food-web-train-main-frontend.onrender.com/',
    codeLink: 'https://github.com/bezawitassaye/food_web_train-main',
  },


  {
    id: 'web',
    title: 'Clothing Delivery Service Website',
    description: 'A convenient app designed for ordering and delivering clothing items directly to your doorstep. Users can browse collections, select sizes and styles, place orders, and track deliveries in real-time. The app offers secure payments, order history, and personalized recommendations to enhance the shopping experience. It makes getting your favorite clothing fast, easy, and hassle-free.',
    image: cloths,
    tags: ['Next Js', 'Node.js', 'Tailwind CSS', 'Express.js', 'Redux Toolkit'],
    viewLink: 'https://eccomercereact-main-frontendpart.onrender.com/collection',
    codeLink: 'https://github.com/bezawitassaye/eccomercereact-main',
  },
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

      {/* Category Buttons */}
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

      {/* Project Cards */}
      <div className="projects-details-container">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-details-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <a href={project.viewLink} target="_blank" rel="noopener noreferrer">
                  <button className="btn">View</button>
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="btn">Code</button>
                </a>
              </div>
            </div>
            <div className="project-description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
