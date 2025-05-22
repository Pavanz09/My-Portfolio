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
    <p style={{textAlign:'justify',lineHeight:'27px'}}>
    Welcome to my digital haven! I'm <span style={{color:'#FF004F' , fontWeight:'bolder'}}>Pavan Satyappanavar</span>,a dedicated Full Stack web developer. My journey started at Jain College of Engineering, where I began to develop my skills. Since then, I've focused on refining my expertise in web development,web design, photo editing, and video editing, continuously striving for excellence in my work. <br />
    &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;
    When I'm not immersed in code, you'll often find me navigating virtual realms or exploring the latest PC games. Gaming isn't just a pastime it's a wellspring of inspiration that fuels my creativity in web development. I'm passionate about infusing my projects with the same excitement and engagement that games evoke. <br />
    &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; 
    Away from the digital domain, I find solace in the open road and the allure of new horizons. Adventure is my muse, permeating my work with a sense of wonder and exploration. Each project is an opportunity to capture the essence of diverse cultures and natural landscapes, creating visually striking and authentic experiences. Thank you for dropping by my website I'm thrilled at the prospect of collaborating with you to bring your digital vision to life!
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
          backCardTitle: 'Atom8',
          position: 'SDE 1',
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
