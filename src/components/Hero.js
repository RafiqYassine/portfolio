import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Your Name</h1>
        <div className="hero-subtitle">Junior Web Developer</div>
        <p className="hero-description">
          I create beautiful and functional websites using modern technologies. 
          Passionate about coding and always learning new things.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">
            <i className="fas fa-code"></i>
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            <i className="fas fa-paper-plane"></i>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;