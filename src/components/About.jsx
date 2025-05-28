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
    Hello and welcome! I’m <span style="color: rgb(255, 0, 79); font-weight: bolder;">Pavan Satyappanavar</span>, a passionate Full Stack Web Developer. My journey began at Jain College of Engineering, where I built a strong foundation in technology. Since then, I have focused on improving my skills in web development, web design, photo editing, and video editing. I take pride in delivering high-quality work that meets both creative and technical goals.
    <br><br>
    Outside of development, I enjoy playing PC games, which inspire many of my creative ideas. Gaming helps me think differently and bring more interactive and engaging elements into my projects.
    <br><br>
    I also enjoy traveling and exploring new places. These experiences give me fresh perspectives that I apply to my work, helping me create designs that are both unique and meaningful.
    <br><br>
    Thank you for visiting my portfolio. I look forward to the opportunity to work together and bring your ideas to life in a professional and creative way.
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
