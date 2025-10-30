import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      tech: ['React', 'CSS', 'JavaScript', 'Context API'],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: t('projects.weather.title'),
      description: t('projects.weather.description'),
      tech: ['JavaScript', 'API', 'CSS', 'HTML'],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: t('projects.taskManager.title'),
      description: t('projects.taskManager.description'),
      tech: ['React', 'Local Storage', 'CSS'],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      tech: ['React', 'CSS', 'JavaScript'],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">{t('projects.title')}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image" style={{ background: `hsl(${index * 90}, 70%, 60%)` }}>
              {project.title}
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
                  {t('projects.liveDemo')}
                </a>
                <a href={project.codeLink} className="project-link">
                  <i className="fab fa-github"></i>
                  {t('projects.sourceCode')}
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