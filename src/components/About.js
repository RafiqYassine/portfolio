import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <div className="profile-image" style={{ 
            background: '#6366f1', 
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem',
            borderRadius: '20px'
          }}>
            Your Photo Here
          </div>
        </div>
        <div className="about-text">
          <h3>Curious Developer & Problem Solver</h3>
          <p>
            Hello! I'm a passionate junior web developer with a strong foundation in modern 
            web technologies. I love turning ideas into reality through code and creating 
            amazing user experiences.
          </p>
          <p>
            When I'm not coding, you can find me learning new technologies, contributing to 
            open-source projects, or exploring the latest trends in web development.
          </p>
          <p>
            I'm currently looking for opportunities to work on exciting projects and 
            collaborate with amazing people.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;