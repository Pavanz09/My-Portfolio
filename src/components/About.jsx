import React from 'react';
import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import myProfileImage from '../assets/IMG_20180320_141506.jpg';

const About = () => {
  return (
    <>
    <div className='aboutMainContainer' id='about'>
    <div className='myIntroConatiner'>
    <h1>About<span style={{color:'#FF004F', margin:'0px'}}> Me</span></h1>
    <div className='myIntroduction'>
    <p style="text-align: justify; line-height: 27px;">
    Hello and welcome! I’m <span style="color: rgb(255, 0, 79); font-weight: bolder;">Pavan Satyappanavar</span>, a dedicated Full Stack Web Developer with a strong background in software engineering from Jain College of Engineering. My professional journey has equipped me with hands-on experience in modern web development, UI/UX design, and frontend-backend integration. In addition to coding, I actively work on creative projects involving photo and video editing, ensuring a well-rounded approach to visual presentation.
    <br>
    I'm passionate about delivering scalable, high-performance digital solutions that are both visually appealing and functionally robust. My experience spans across React, Node.js, AWS, cloud deployment, automation scripting with Shell, and mobile development with React Native.
    <br>
    Outside of work, I draw creative inspiration from PC gaming and travel. Both experiences help me approach challenges with a fresh perspective and inject a sense of interactivity and exploration into my projects.
    <br>
    Thank you for taking the time to explore my portfolio. I’m excited about the opportunity to collaborate and contribute to meaningful digital experiences.
    </p>
    </div>
    <div className='myIntrosecondSection'>
    <FlipCard/>
    </div>
    </div>
    <div className='myImageContainer'>
    <img src={myProfileImage} alt="My Image" className='profilePic' />
    </div>
    </div>
    </>
  )
};

export default About;
  function FlipCard(){
      const FlipCardData = [
        {
          title: 'Experinece',
          subTitle: '2+ Years',
          backCardTitle: 'ATOM8 Robotic Labs Pvt Ltd',
          position: 'Software Development Engineer 1',
          icon: faStar
        },
        {
          title: 'Education',
          subTitle: 'Bachelor of Engineering',
          backCardTitle: 'Jain College of Engineering',
          position: 'Electronics & Communication',
          icon: faGraduationCap
        },
      ];
    
    return(
    <>
    {FlipCardData.map((exp, index) => (
    <div className="myIntrocontainer"  key={index}>
      <div className="cardContainer">
        <div className="frontCard">
          <h3 style={{ textAlign: 'center', margin: '0' }}>
            <FontAwesomeIcon style={{ color: '#FF004F' }} icon={exp.icon} />&nbsp;{exp.title}</h3>
          <h4 style={{ textAlign: 'center', color: '#969696', margin: '0' }}>{exp.subTitle}</h4>
        </div>
        <div className="backCard">
          <h3 style={{ margin: '0' }}>{exp.backCardTitle}</h3>
          <p style={{ margin: '0',color:'#bbbbbb' }}>{exp.position}</p>
        </div>
      </div>
  </div>
    ))}
    </>
    )
  }
