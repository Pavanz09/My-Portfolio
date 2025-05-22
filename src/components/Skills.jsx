import React from 'react';
import '../styles/Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode , faCloud , faServer , faDatabase , faScrewdriverWrench , faSquare , faMobile} from '@fortawesome/free-solid-svg-icons';



const Skills = () => {
  return (
    <div className='SkillsContainer' id='skills'>
    <h1 className='professionalSkillsHeader'>Professional<span style={{color:'#FF004F'}}> Skills</span></h1>
    <div className='skillsMain'>
    <SkillsCards/> 
    </div>
    <ColorDescription/>
    </div>
  )
};

export default Skills;


function SkillsCards(){
  const SkillsData = [
    {
      id:1,
      techTitle: 'FrontEnd',
      icon:faCode
    },
    {
      id:2,
      techTitle: 'BackEnd',
      icon:faServer
    },
    {
      id:3,
      techTitle: 'DataBase',
      icon:faDatabase
    },
    {
      id:4,
      techTitle: 'Mobile DevOps / Deployment',
      icon:faMobileScreenButton
    },
    {
      id:5,
      techTitle: 'Cloud & Hosting',
      icon:faCloud
    },
    {
      id:6,
      techTitle: 'Dev Tools',
      icon:faScrewdriverWrench
    }
  ]
  const FrontEndTech = [
    { techStack: 'HTML/CSS/Sass' ,color: '#ff0000'},
    { techStack: 'WordPress' ,color: '#84ff00'},
    { techStack: 'JavaScript / TypeScript' ,color: '#FFC000'},
    { techStack: 'React JS' ,color: '#FFC000'},
    { techStack: 'React Native' ,color: '#FFC000'}
  ];

  const BackEndTech = [
    { techStack: 'Java' ,color: '#FFC000'},
    { techStack: 'Node.js / Express.js' ,color: '#FFC000'},
    { techStack: 'Go Lang' ,color: '#84ff00'},
    { techStack: 'Rest API' ,color: '#FFC000'}
  ];

  const DatabaseTech = [
    { techStack: 'MySQL' ,color: '#ff0000'},
    { techStack: 'Postgre SQL' ,color: '#FFC000'}
  ];

  const mobileDevopsDeployment = [
    { techStack: 'Fastlane – iOS & Android App Automation' ,color: '#FFC000'},
    { techStack: 'App Distribution - App Store / Play Store Deployment' ,color: '#ff0000'},
    { techStack: 'Native Build Tools - Xcode / Android Studio' ,color: '#FFC000'}
  ];

  const cloudHosting = [
    { techStack: 'Firebase – Auth, Firestore' ,color: '#FFC000'},
    { techStack: 'AWS - IAM, Lambda, EC2, ECS, S3, CodeBuild, API Gateway, SQS' ,color: '#84ff00'}
  ];

  const Tools = [
    { techStack: 'Eclipse' ,color: '#ff0000'},
    { techStack: 'VS Code' ,color: '#FFC000'},
    { techStack: 'GitHub / GitLab' ,color: '#FFC000'},
    { techStack: 'PostMan' ,color: '#FFC000'},
    { techStack: 'ngrok' ,color: '#FFC000'}
  ];

return(
  <>
  {SkillsData.map((item , index) => (  
  <div key={index} className='skillsBody'>
    <h2 className='skillsHeader'>{item.techTitle}&nbsp;<FontAwesomeIcon style={{color:'#FF004F'}} icon={item.icon} /></h2>
    <div className='techStackBody'>
    {item.techTitle === 'FrontEnd' && FrontEndTech.map((item, index) => (
              <div key={index} className='techStack' style={{ border: `1px solid ${item.color}` }}>
                <p className='techStackData'>{item.techStack}</p>
              </div>
            ))}
            {item.techTitle === 'BackEnd' && BackEndTech.map((item, index) => (
              <div key={index} className='techStack' style={{ border: `1px solid ${item.color}` }}>
                <p className='techStackData'>{item.techStack}</p>
              </div>
            ))}
            {item.techTitle === 'DataBase' && DatabaseTech.map((item, index) => (
              <div key={index} className='techStack' style={{ border: `1px solid ${item.color}` }}>
                <p className='techStackData'>{item.techStack}</p>
              </div>
            ))}
            {item.techTitle === 'Mobile DevOps / Deployment' && mobileDevopsDeployment.map((item, index) => (
              <div key={index} className='techStack' style={{ border: `1px solid ${item.color}` }}>
                <p className='techStackData'>{item.techStack}</p>
              </div>
            ))}
            {item.techTitle === 'Cloud & Hosting' && cloudHosting.map((item, index) => (
              <div key={index} className='techStack' style={{ border: `1px solid ${item.color}` }}>
                <p className='techStackData'>{item.techStack}</p>
              </div>
            ))}
            {item.techTitle === 'Dev Tools' && Tools.map((item, index) => (
              <div key={index} className='techStack' style={{ border: `1px solid ${item.color}` }}>
                <p className='techStackData'>{item.techStack}</p>
              </div>
            ))}
    </div>
  </div>
    ))}
  </>
)
}

function ColorDescription(){
  return(
    <>
    <div className='colorDescriptionBox'>
    <p className='colorDescriptionBoxName'>
    <FontAwesomeIcon icon={faSquare} style={{color:'#ff0000'}} />&nbsp; Proficient</p>
    <p className='colorDescriptionBoxName'>
    <FontAwesomeIcon icon={faSquare} style={{color:'#FFC000'}}/>&nbsp; Intermediate</p>
    <p className='colorDescriptionBoxName'>
    <FontAwesomeIcon icon={faSquare} style={{color:'#84ff00'}}/>&nbsp; Beginner</p>
    </div>
    </>
  )
}
