import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with shopping cart functionality and product filtering.",
      tech: ['React', 'CSS', 'JavaScript', 'Context API'],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location detection and 5-day forecast.",
      tech: ['JavaScript', 'API', 'CSS', 'HTML'],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Task Manager",
      description: "A drag-and-drop task management application with local storage persistence.",
      tech: ['React', 'Local Storage', 'CSS'],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills.",
      tech: ['React', 'CSS', 'JavaScript'],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image" style={{ background: `hsl(${index * 90}, 70%, 60%)` }}>
              Project {index + 1}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoLink} className="project-link">
                  <i className="fas fa-external-link-alt"></i>
                  Live Demo
                </a>
                <a href={project.codeLink} className="project-link">
                  <i className="fab fa-github"></i>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;