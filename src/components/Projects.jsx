import React from "react";
import "../styles/Projects.css";
import otpImage from "../assets/sms-authentication-banner.jpg";
import loanImage from "../assets/Best-Instant-Personal-Loan-Apps-in-India-1.jpg";
import hrms from "../assets/HRMS.png";

const projects = [
  {
    title: "User Login OTP Integration",
    desc: "Secure OTP-based authentication integrated with MobTexting API for smooth onboarding.",
    tech: ["AngularJS", "Java", "MobTexting API", "MySQL"],
    image: otpImage,
  },
  {
    title: "Lead & Client Management",
    desc: "CRM system for efficient lead tracking and communication handling.",
    tech: ["Java", "Spring Boot", "Hibernate", "PostgreSQL"],
    image: loanImage,
  },
  {
    title: "Human Resource Management System",
    desc: "Comprehensive HRMS platform managing employees, payroll, and attendance.",
    tech: ["PostgreSQL", "Express", "React", "Node.js"],
    image: hrms,
  },
];

const Projects = () => {
  return (
    <div className='ServicesContainer' id='services'>
    <h1 className='projectsHeader'>My <span style={{ color: '#FF004F' }}>Portfolio</span></h1>
    <section className="projects-section" id="projects">
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-box" key={i}>
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="info-box">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="tech-tags">
                {project.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Projects;
