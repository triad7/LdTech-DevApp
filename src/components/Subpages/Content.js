
import React from 'react';
import "./Content.css";
import backgroundVideo from '../../videos/video.mp4'; 

const Content = () => {
  return (
    <section id="content" className="video-bg">
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content-overlay">
          <div className="content-container">
            <h2>Transfer Your Operations with DevOps</h2>
            <p>Effortlessly automate your software development and delivery process with our cutting-edge technology.</p>
            <button>Try Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
