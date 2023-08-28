import React from 'react';
import './Services.css';

const Services = () => {

  return (
    <section id="services" className="services-section">
      <h2>Key Features</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>Collaboration & Communication</h3>
          <img src="https://embracingfollowership.files.wordpress.com/2020/07/collaboration.jpg" alt="Service1" />
          <p>Efficient collaboration hinges on unified communication practices; setting clear standards counters document fragmentation, tool disparity, and communication challenges.</p>
        </div>
        <div className="service-card">
          <h3>Continuos Integration & Deployment</h3>
          <img src="https://media.licdn.com/dms/image/C4D12AQHEozYv3E5rdA/article-cover_image-shrink_600_2000/0/1612876678427?e=2147483647&v=beta&t=2fLzzpCTVay31sHhzOEZpVwyfJvxwwjkv-LOpZ9P8r8" alt="Service 2" />
        <p>A CI/CD pipeline is a series of steps automating software delivery, enhancing development life cycle efficiency and effectiveness.</p>
        </div>
        <div className="service-card">
          <h3>Automated Testing</h3>
          <br></br>
          <img src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/nov/30nov/What-is-Automation-Testing.jpg" alt="Service 3" />
          <p>Test automation streamlines software testing with scripted tools, boosting efficiency by automating tests, reducing errors, and enhancing coverage.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
