import React from 'react';
import './About.css'; 
import { useNavigate } from 'react-router-dom';

const About = () => {
  const naviagate = useNavigate();
  const handleContactClick = () => {
    naviagate('/contact'); 
  };

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src="https://media.istockphoto.com/id/1161702497/vector/team-of-programmer-concept-with-devops-software-development-practices-methodology-vector.jpg?s=612x612&w=0&k=20&c=5cqLQaudaYaXv3OdYQHjt-F-LhcuOiBhXWtHLMwj4PU=" alt="About Us" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>Livedigital Technology is a leading provider of DevOps automation software based in Bhubaneswar, OR. With our cutting-edge technology and innovative solutions, we empower businesses to streamline their development and operations processes, enabling them to deliver high-quality software faster and more efficiently. Our team of experienced professionals is dedicated to delivering exceptional results and providing unparalleled support to our clients. We are committed to driving digital transformation and helping businesses stay ahead in today's fast-paced and competitive market.</p>
          <button onClick={handleContactClick}>Contact</button>

        </div>
      </div>
    </section>
  );
};

export default About;
