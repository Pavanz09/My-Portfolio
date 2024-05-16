import React from 'react';
import '../styles/Projects.css';
import otpImage from '../assets/sms-authentication-banner.jpg';
import loanImage from '../assets/Best-Instant-Personal-Loan-Apps-in-India-1.jpg';
import portfolioImage from '../assets/PavanPortfolio.png';


const Projects = () => {
  return(
    <div className='projectsMainContainer' id='projects'>
    <h1 className='projectHeader'>Projects</h1>
    <div className='cardsBody'>
      <Cards/>
    </div>
    </div>
  )
};

export default Projects;


function Cards(){
const projectsData = [
  {
    title: "User Login OTP Integration",
    description: "At Intelligrow Bancsoft, I implemented a robust authentication system with OTP integration for enhanced security. Leveraged AngularJS for a dynamic frontend, Java for backend operations including OTP generation and MySQL for secure data storage. Integrated Mob Texting API for OTP functionality and ensured secure communication between frontend and backend.",
    image: otpImage
  },
  {
    title: "Lead & Client Management for Mobile App",
    description: "In Loan mobile application at Intelligrow Bancsoft, I played a crucial role in developing the lead and client creation modules for the mobile application using Java. Leveraging JDBC and Hibernate, I ensured seamless data storage and retrieval, allowing for efficient management of leads and clients within the application.",
    image: loanImage
  },
  {
    title: "Portfolio Website",
    description: "My portfolio website, crafted with ReactJS, HTML, and CSS, embodies my skills and style in a sleek design. It showcases my work and expertise, inviting potential collaborators and clients to connect effortlessly.",
    image: portfolioImage
  }
]
  return(
    <>
    {projectsData.map((project, index) => (
    <div className='ProjectsContainer' key={index}>
      <div className="imageContainer">
        <img src={project.image} alt="otpImage" className='imageOtp'/>
      <div className='textContainer'>
      <h2>{project.title}</h2>
      </div>
      </div>
      <div className='layer'>
        <h3 className='projectTitles'>{project.title}</h3>
        <p className='projectDescription'>{project.description}</p>
        <button>Read more</button>
      </div>
    </div>
    ))}
    </>
  )
}