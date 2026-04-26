import React from "react";
import "../styles/Projects.css";
import { projectsData } from "../data/projects";

const Projects = () => {
  return (
    <section className='ServicesContainer' id='projects'>
      <h1 className='projectsHeader'>My <span style={{ color: '#FF004F' }}>Work</span></h1>
      <div className="projects-grid">
        {projectsData.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-content">
              <div className="project-top-meta">
                <span className="project-company">{project.company}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.desc}</p>
              <div className="project-tech-stack">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
