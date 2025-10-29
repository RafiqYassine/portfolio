import React from 'react';

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'HTML/CSS', level: 'Advanced' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'React', level: 'Intermediate' },
      { name: 'Responsive Design', level: 'Advanced' }
    ],
    backend: [
      { name: 'Node.js', level: 'Basic' },
      { name: 'Express', level: 'Basic' },
      { name: 'MongoDB', level: 'Basic' },
      { name: 'REST APIs', level: 'Intermediate' }
    ],
    tools: [
      { name: 'Git & GitHub', level: 'Intermediate' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Figma', level: 'Basic' },
      { name: 'Netlify', level: 'Intermediate' }
    ]
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3><i className="fas fa-palette"></i> Frontend</h3>
          <ul className="skill-list">
            {skillsData.frontend.map((skill, index) => (
              <li key={index}>
                <span>{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="skill-category">
          <h3><i className="fas fa-server"></i> Backend</h3>
          <ul className="skill-list">
            {skillsData.backend.map((skill, index) => (
              <li key={index}>
                <span>{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="skill-category">
          <h3><i className="fas fa-tools"></i> Tools</h3>
          <ul className="skill-list">
            {skillsData.tools.map((skill, index) => (
              <li key={index}>
                <span>{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;