import React from 'react';
import '../styles/Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faSprayCan } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';


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
      techTitle: 'Design',
      icon:faSprayCan
    },
    {
      id:5,
      techTitle: 'Dev Tools',
      icon:faScrewdriverWrench
    }
  ]
  const FrontEndTech = [
    { techStack: 'HTML' ,color: '#ff0000'},
    { techStack: 'CSS' ,color: '#ff0000'},
    { techStack: 'Sass' ,color: '#84ff00'},
    { techStack: 'WordPress' ,color: '#84ff00'},
    { techStack: 'JavaScript' ,color: '#FFC000'},
    { techStack: 'Angular JS' ,color: '#FFC000'},
    { techStack: 'React JS' ,color: '#FFC000'}
  ];

  const BackEndTech = [
    { techStack: 'Java' ,color: '#FFC000'},
    { techStack: 'Spring' ,color: '#84ff00'},
    { techStack: 'Node JS' ,color: '#84ff00'},
    { techStack: 'Rest API' ,color: '#FFC000'}
  ];

  const DatabaseTech = [
    { techStack: 'MySQL' ,color: '#ff0000'},
    { techStack: 'Postgre SQL' ,color: '#84ff00'}
  ];

  const Design = [
    { techStack: 'Figma' ,color: '#FFC000'},
    { techStack: 'Photoshop' ,color: '#84ff00'}
  ];

  const Tools = [
    { techStack: 'Eclipse' ,color: '#ff0000'},
    { techStack: 'VS Code' ,color: '#FFC000'},
    { techStack: 'GitHub' ,color: '#FFC000'},
    { techStack: 'PostMan' ,color: '#FFC000'}
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
            {item.techTitle === 'Design' && Design.map((item, index) => (
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