import '../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <div className='ServicesContainer' id='services'>
      <h1 className='skillsHeader'>My <span style={{ color: '#FF004F' }}>Skills</span></h1>
      <div className='servicesMain'>
        <SkillsCards />
      </div>
    </div>
  );
};

export default Skills;

function SkillsCards() {
  return (
    <>
      {skillsData.map((item, index) => (
        <div key={index} className='serviceCard'>
          <div className='serviceIconBox' style={{ border: `1px solid ${item.color}` }}>
            <FontAwesomeIcon icon={item.icon} style={{ color: item.color, fontSize: '22px' }} />
          </div>
          <h2 className='serviceTitle'>
            {item.title}
          </h2>
          <p className='serviceDescription'>{item.description}</p>
          <div className='serviceTags'>
            {item.tags.map((tag, i) => (
              <span key={i} className='serviceTag' style={{ border: `1px solid ${item.color}` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
